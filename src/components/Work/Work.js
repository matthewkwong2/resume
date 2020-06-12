import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';

import Companies from './Companies';
import { HexagonSlice4 } from 'mdi-material-ui'
import SectionHeader from 'components/SectionHeader';
import WorkingExpTimeline from './WorkingExpTimeline';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import work from 'constants/work';

const Work = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.work));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.work}>
      <Container ref={ref}>
        <SectionHeader
          title={work.title}
          Icon={HexagonSlice4}
        />
        <WorkingExpTimeline />
        <Companies />
      </Container>
    </section>
  );
};

export default Work;