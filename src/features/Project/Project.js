import { Box, Container, Grid } from '@material-ui/core';

import { HexagonSlice4 } from 'mdi-material-ui';
import ProjectCard from './ProjectCard';
import SectionHeader from 'components/SectionHeader';
import constants from 'constants/app';
import data from 'constants/data';
import delphixPng from 'assets/img/delphix/delphix.png';
import delphixWebp from 'assets/img/delphix/delphix.webp';
import mysqlPng from 'assets/img//mysql/mysql.png';
import mysqlWebp from 'assets/img/mysql/mysql.webp';
import nav from 'constants/nav';
import timeOffApplicationPng from 'assets/img/timeOffApplication/timeOffApplication.png';
import timeOffApplicationWebp from 'assets/img/timeOffApplication/timeOffApplication.webp';
import tsisPng from 'assets/img/tsis/tsis.png';
import tsisWebp from 'assets/img/tsis/tsis.webp';
import useSx from './useProjectSx';

const mysql = {
  png: mysqlPng,
  webp: mysqlWebp
};

const delphix = {
  png: delphixPng,
  webp: delphixWebp
};

const tsis = {
  png: tsisPng,
  webp: tsisWebp
};

const timeOffApplication = {
  png: timeOffApplicationPng,
  webp: timeOffApplicationWebp
};

const Project = () => {
  const sx = useSx();

  return (
    <Container component='section' id={nav.project.id}>
      <SectionHeader
        heading={constants.myProject}
        Icon={HexagonSlice4}
      />
      <Box sx={sx.gridContainer}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard
              image={mysql}
              title={data.project.mysql.title}
              date={data.project.mysql.date}
              description={data.project.mysql.description}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard
              image={delphix}
              title={data.project.delphix.title}
              date={data.project.delphix.date}
              description={data.project.delphix.description}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard
              image={tsis}
              title={data.project.tsis.title}
              date={data.project.tsis.date}
              description={data.project.tsis.description}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard
              image={timeOffApplication}
              title={data.project.timeOffApplication.title}
              date={data.project.timeOffApplication.date}
              description={data.project.timeOffApplication.description}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Project;