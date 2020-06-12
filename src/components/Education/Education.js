import { Container, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';

import EducationTimeline from './EducationTimeline';
import { HexagonSlice3 } from 'mdi-material-ui'
import SectionHeader from 'components/SectionHeader';
import education from 'constants/education';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  }
}));

const Education = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.education));
    }
  }, [dispatch, inView]);

  return (
    <section className={classes.root} id={nav.education}>
      <Container ref={ref}>
        <SectionHeader
          title={education.title}
          Icon={HexagonSlice3}
        />
        <EducationTimeline />
      </Container>
    </section>
  );
};

export default Education;