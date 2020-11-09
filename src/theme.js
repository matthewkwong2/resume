import 'fontsource-rubik/300-normal.css';
import 'fontsource-rubik/400-normal.css';
import 'fontsource-rubik/500-normal.css';
import 'fontsource-rubik/700-normal.css';

import { createMuiTheme, fade, responsiveFontSizes } from '@material-ui/core';

import azonix from 'assets/font/azonix.woff';
import azonix2 from 'assets/font/azonix.woff2';
import { isWebPSupported } from 'api/APIUtils';

const baseTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const themeOptions = {
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Azonix',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: [
              ['local("Azonix")'],
              ['local("Azonix-Regular")'],
              [`url(${azonix2})`, 'format("woff2")'],
              [`url(${azonix})`, 'format("woff")']
            ]
          }
        ],
        '::selection': {
          background: 'rgba(166, 175, 189, .3)'
        },
        html: {
          scrollBehavior: 'smooth'
        },
        section: {
          '@media (min-width: 0px) and (orientation: landscape)': {
            scrollMarginTop: 48 + 'px'
          },
          '@media (min-width: 600px)': {
            scrollMarginTop: 64 + 'px'
          },
          scrollMarginTop: 56 + 'px',
          paddingTop: baseTheme.spacing(10),
          paddingBottom: baseTheme.spacing(10)
        },
        input: {
          '@media (min-width: 0px) and (orientation: landscape)': {
            scrollMarginTop: 48 + baseTheme.spacing(3) + 'px'
          },
          '@media (min-width: 600px)': {
            scrollMarginTop: 64 + baseTheme.spacing(3) + 'px'
          },
          scrollMarginTop: 56 + baseTheme.spacing(3) + 'px'
        },
        '.Typewriter__cursor': {
          fontWeight: baseTheme.typography.h2.fontWeight
        }
      }
    },
    MuiFab: {
      root: {
        borderRadius: baseTheme.shape.borderRadius
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: baseTheme.palette.background.default
      }
    },
    MuiTimeline: {
      root: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    MuiTimelineItem: {
      alignLeft: {
        '&$missingOppositeContent': {
          '&::before': {
            flex: 0,
            padding: 0
          }
        }
      }
    }
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
      elevation: 0,
      position: 'fixed'
    }
  },
  palette: {
    primary: {
      main: baseTheme.palette.background.default
    },
    secondary: {
      main: baseTheme.palette.common.white
    }
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif'
  }
};

const darkThemeOptions = {
  ...themeOptions,
  overrides: {
    ...themeOptions.overrides,
    MuiDivider: {
      root: {
        backgroundColor: fade(baseTheme.palette.common.white, 0.12 * 3)
      }
    }
  },
  props: {
    ...themeOptions.props,
    MuiSvgIcon: {
      htmlColor: baseTheme.palette.common.white
    }
  },
  palette: {
    ...themeOptions.palette,
    type: 'dark'
  }
};

const theme = responsiveFontSizes(createMuiTheme(themeOptions));
const darkTheme = responsiveFontSizes(createMuiTheme(darkThemeOptions));

const createBackground = (theme, bgsWebp, bgsFallback, bgPlaceholder) => {
  const { bg, bgMd, bgSm, bgXs } = isWebPSupported() ? bgsWebp : bgsFallback;

  const getBgImageCSS = bg => {
    const overlay = fade(theme.palette.common.black, .7);

    return [
      `linear-gradient(${overlay}, ${overlay})`,
      `url(${bg})`,
      `url(${bgPlaceholder})`
    ];
  };

  return {
    [theme.breakpoints.only('xs')]: {
      backgroundImage: getBgImageCSS(bgXs)
    },
    [theme.breakpoints.only('sm')]: {
      backgroundImage: getBgImageCSS(bgSm)
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundImage: getBgImageCSS(bgMd)
    },
    backgroundImage: getBgImageCSS(bg),
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@supports (-webkit-touch-callout: inherit)': {
      backgroundAttachment: 'scroll'
    }
  };
};

export default theme;
export { darkTheme, createBackground };