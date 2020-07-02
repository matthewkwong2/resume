import 'fontsource-roboto/latin-300-normal.css';
import 'fontsource-roboto/latin-400-normal.css';
import 'fontsource-roboto/latin-500-normal.css';
import 'fontsource-roboto/latin-700-normal.css';

import {
  createMuiTheme,
  fade,
  responsiveFontSizes
} from '@material-ui/core/styles';

import azonix from 'assets/font/Azonix.woff';

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
        '@font-face': {
          fontFamily: 'Azonix',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `local('Azonix'), url(${azonix}) format('woff')`,
          fontDisplay: 'swap'
        },
        '::selection': {
          background: 'rgba(166, 175, 189, 0.3)'
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
    MuiSnackbarContent: {
      root: {
        backgroundColor: darkBaseTheme.palette.background.default
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
    secondary: {
      main: darkBaseTheme.palette.background.default
    }
  }
}));

const darkTheme = createMuiTheme({
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
    type: 'dark'
  }
});

export default theme;
export { darkTheme };