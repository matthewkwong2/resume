import React, { useEffect } from 'react';

import Companies from './Companies';
import { Container } from '@material-ui/core';
import { HexagonSlice4 } from 'mdi-material-ui'
import SectionHeader from 'components/SectionHeader';
import WorkingExpTimeline from './WorkingExpTimeline';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import work from 'constants/work';

const Work = () => {
  const [ref, inView] = useInView({ rootMargin: '-25% 0px' });
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