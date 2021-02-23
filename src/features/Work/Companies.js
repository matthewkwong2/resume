import CompanyLogo from './CompanyLogo';
import { Grid } from '@material-ui/core';
import data from 'constants/data';
import ha from 'assets/img/ha.png';
import hku from 'assets/img/hku.png';
import useSx from './useCompaniesSx';
import versitech from 'assets/img/versitech.png';

const Companies = () => {
  const sx = useSx();

  return (
    <Grid sx={sx.root} container spacing={2}>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={ha}
          alt={data.work.company.ha.name}
          href={data.work.company.ha.href}
        />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={hku}
          alt={data.work.company.hku.name}
          href={data.work.company.hku.href}
        />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo
          src={versitech}
          alt={data.work.company.versitech.name}
          href={data.work.company.versitech.href}
        />
      </Grid>
    </Grid>
  );
};

export default Companies;