import 'fontsource-roboto';

import { createMuiTheme, fade, responsiveFontSizes } from '@material-ui/core/styles';

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

console.log(darkBaseTheme)

const theme = responsiveFontSizes(createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'Azonix Regular',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `local('Azonix Regular'), url(${azonix}) format('woff')`
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
    MuiContainer: {
      root: lightBaseTheme.mixins.toolbar
    },
    MuiTimelineDot: {
      defaultPrimary: {
        boxShadow: 'none'
      }
    },
    MuiTimelineItem: {
      alignLeft: {
        '&$missingOppositeContent': {
          '&:before': {
            flex: 0,
            padding: 0,
            paddingLeft: lightBaseTheme.spacing(2)
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
  palette: {
    type: 'dark'
  }
});

export default theme;
export { darkTheme };