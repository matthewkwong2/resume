import { Box, Container, Grid } from '@material-ui/core';

import { HexagonSlice4 } from 'mdi-material-ui';
import ProjectCard from './ProjectCard';
import SectionHeader from 'components/SectionHeader';
import constants from 'constants/app';
import data from 'constants/data';
import delphix from 'assets/img/delphix.png';
import mysql from 'assets/img/mysql.png';
import nav from 'constants/nav';
import timeOffApplication from 'assets/img/time_off_application.png';
import tsis from 'assets/img/tsis.png';
import useSx from './useProjectSx';

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