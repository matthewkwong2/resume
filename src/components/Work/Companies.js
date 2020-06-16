import { Grid, makeStyles } from '@material-ui/core';

import CompanyLogo from './CompanyLogo';
import React from 'react';
import ha from 'assets/img/ha.png';
import hku from 'assets/img/hku.png';
import versitech from 'assets/img/versitech.png';
import work from 'constants/work';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Companies = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={2} justify='space-evenly'>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={ha}
          alt={work.company.ha.name}
          href={work.company.ha.href}
        />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={hku}
          alt={work.company.hku.name}
          href={work.company.hku.href}
        />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={versitech}
          alt={work.company.versitech.name}
          href={work.company.versitech.href}
        />
      </Grid>
    </Grid>
  );
};

export default Companies;