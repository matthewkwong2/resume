import { Container, makeStyles } from '@material-ui/core';

import EducationalExpTimeline from './EducationalExpTimeline';
import { HexagonSlice3 } from 'mdi-material-ui'
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import education from 'constants/education';
import nav from 'constants/nav';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  }
}));

const Education = () => {
  const classes = useStyles();

  return (
    <section className={classes.root} id={nav.education}>
      <Container>
        <SectionHeader
          title={education.title}
          Icon={HexagonSlice3}
        />
        <EducationalExpTimeline />
      </Container>
    </section>
  );
};

export default Education;