import 'fontsource-rubik/latin-300-normal.css';
import 'fontsource-rubik/latin-400-normal.css';
import 'fontsource-rubik/latin-500-normal.css';
import 'fontsource-rubik/latin-700-normal.css';

import { createMuiTheme, fade, responsiveFontSizes } from '@material-ui/core';
import { isIOS, isWebPSupported } from 'api/APIUtils';

import azonix from 'assets/font/azonix.woff';
import azonix2 from 'assets/font/azonix.woff2';
import { blue } from '@material-ui/core/colors';

const lightBaseTheme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const darkBaseTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const theme = responsiveFontSizes(createMuiTheme({
  overrides: {
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
          paddingTop: lightBaseTheme.spacing(10),
          paddingBottom: lightBaseTheme.spacing(10)
        },
        input: {
          '@media (min-width: 0px) and (orientation: landscape)': {
            scrollMarginTop: 48 + lightBaseTheme.spacing(3) + 'px'
          },
          '@media (min-width: 600px)': {
            scrollMarginTop: 64 + lightBaseTheme.spacing(3) + 'px'
          },
          scrollMarginTop: 56 + lightBaseTheme.spacing(3) + 'px'
        },
        '.Typewriter': {
          display: 'inline'
        }
      }
    },
    MuiFab: {
      root: {
        borderRadius: lightBaseTheme.shape.borderRadius
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: darkBaseTheme.palette.background.default
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
      main: darkBaseTheme.palette.background.default
    },
    secondary: blue
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif'
  }
}));

const darkTheme = responsiveFontSizes(createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: fade(darkBaseTheme.palette.common.white, 0.12 * 3)
      }
    }
  },
  props: {
    MuiSvgIcon: {
      htmlColor: darkBaseTheme.palette.text.primary
    }
  },
  palette: {
    primary: {
      main: darkBaseTheme.palette.common.white
    },
    secondary: blue,
    type: 'dark'
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif'
  }
}));

const createBackground = (theme, bgsWebp, bgsFallback, bgPlaceholder) => {
  const { bg, bgMd, bgSm, bgXs } = isWebPSupported() ? bgsWebp : bgsFallback;

  return {
    [theme.breakpoints.only('xs')]: {
      backgroundImage: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgXs})`,
        `url(${bgPlaceholder})`
      ]
    },
    [theme.breakpoints.only('sm')]: {
      backgroundImage: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgSm})`,
        `url(${bgPlaceholder})`
      ]
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundImage: [
        `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
        `url(${bgMd})`,
        `url(${bgPlaceholder})`
      ]
    },
    backgroundImage: [
      `linear-gradient(${fade(theme.palette.common.black, .7)}, ${fade(theme.palette.common.black, .7)})`,
      `url(${bg})`,
      `url(${bgPlaceholder})`
    ],
    backgroundAttachment: isIOS() ? 'scroll' : 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fallbacks: {
      background: darkTheme.palette.background.default
    }
  };
};

export default theme;
export { darkTheme, createBackground };