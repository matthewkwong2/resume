import { Box, Container, Grid } from '@material-ui/core';

import { HexagonSlice4 } from 'mdi-material-ui';
import ProjectCard from './ProjectCard';
import SectionHeader from 'components/SectionHeader';
import delphix from 'assets/img/delphix.png';
import mysql from 'assets/img/mysql.png';
import nav from 'constants/nav';
import project from 'constants/project';
import timeOffApplication from 'assets/img/time_off_application.png';
import tsis from 'assets/img/tsis.png';

const Project = () => {
  return (
    <section id={nav.project}>
      <Container>
        <SectionHeader
          title={project.title}
          Icon={HexagonSlice4}
        />
        <Box mt={3} pt={3}>
          <Grid container spacing={4}>
            <Grid item md={4} sm={6} xs={12}>
              <ProjectCard
                image={mysql}
                title={project.mysql.title}
                date={project.mysql.date}
                description={project.mysql.description}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ProjectCard
                image={delphix}
                title={project.delphix.title}
                date={project.delphix.date}
                description={project.delphix.description}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ProjectCard
                image={tsis}
                title={project.tsis.title}
                date={project.tsis.date}
                description={project.tsis.description}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ProjectCard
                image={timeOffApplication}
                title={project.timeOffApplication.title}
                date={project.timeOffApplication.date}
                description={project.timeOffApplication.description}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Project;