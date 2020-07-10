import { createMuiTheme, fade, responsiveFontSizes } from '@material-ui/core';

import azonix from 'assets/font/azonix.woff';
import azonix2 from 'assets/font/azonix.woff2';
import { blue } from '@material-ui/core/colors';
import robotoBold from 'assets/font/roboto-bold.woff';
import robotoBold2 from 'assets/font/roboto-bold.woff2';
import robotoLight from 'assets/font/roboto-light.woff';
import robotoLight2 from 'assets/font/roboto-light.woff2';
import robotoMedium from 'assets/font/roboto-medium.woff';
import robotoMedium2 from 'assets/font/roboto-medium.woff2';
import robotoRegular from 'assets/font/roboto-regular.woff';
import robotoRegular2 from 'assets/font/roboto-regular.woff2';

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
          },
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 300,
            fontDisplay: 'swap',
            src: [
              ['local("Roboto Light")'],
              ['local("Roboto-Light")'],
              [`url(${robotoLight2})`, 'format("woff2")'],
              [`url(${robotoLight})`, 'format("woff")']
            ]
          },
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: [
              ['local("Roboto")'],
              ['local("Roboto-Regular")'],
              [`url(${robotoRegular2})`, 'format("woff2")'],
              [`url(${robotoRegular})`, 'format("woff")']
            ]
          },
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
            src: [
              ['local("Roboto Medium")'],
              ['local("Roboto-Medium")'],
              [`url(${robotoMedium2})`, 'format("woff2")'],
              [`url(${robotoMedium})`, 'format("woff")']
            ]
          },
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src: [
              ['local("Roboto Bold")'],
              ['local("Roboto-Bold")'],
              [`url(${robotoBold2})`, 'format("woff2")'],
              [`url(${robotoBold})`, 'format("woff")']
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
  }
}));

export default theme;
export { darkTheme };