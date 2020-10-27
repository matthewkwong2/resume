import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core';

import CopyrightStatement from './CopyrightStatement';
import SocialMedia from 'components/SocialMedia';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const Footer = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <footer>
      <Divider variant='middle' />
      <Container>
        <Grid className={classes.gridContainer} container alignItems='center' justify='space-between'>
          <Grid item sm='auto' xs={12}>
            <Box display='flex' justifyContent={smUp ? 'flex-start' : 'center'}>
              <CopyrightStatement />
            </Box>
          </Grid>
          <Grid item sm='auto' xs={12}>
            <Box display='flex' justifyContent={smUp ? 'flex-end' : 'center'}>
              <SocialMedia />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;