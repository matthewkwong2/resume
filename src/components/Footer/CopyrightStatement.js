import { Typography, makeStyles } from '@material-ui/core';

import React from 'react';
import data from 'constants/data';
import footer from 'constants/footer';

const useStyles = makeStyles({
  lastName: {
    textTransform: 'uppercase'
  }
});

const CopyrightStatement = () => {
  const classes = useStyles();
  const today = new Date();

  return (
    <Typography color='textSecondary' variant='body2'>
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