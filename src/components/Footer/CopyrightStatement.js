import { Typography, makeStyles } from '@material-ui/core';

import data from 'constants/data';
import footer from 'constants/footer';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  lastName: {
    textTransform: 'uppercase'
  }
}));

const CopyrightStatement = () => {
  const classes = useStyles();
  const today = new Date();

  return (
    <Typography className={classes.root} color='textSecondary' variant='body2'>
      {footer.copyrightStatementPrefix}
      {today.getFullYear() + ' '}
      <span className={classes.lastName}>{data.lastName + ', '}</span>
      {data.firstName + ' '}
      {data.middleName}
      {footer.copyrightStatementSuffix}
    </Typography>
  );
};

export default CopyrightStatement;