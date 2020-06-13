import React, { useEffect } from 'react';

import { Container } from '@material-ui/core';
import { HexagonSlice2 } from 'mdi-material-ui'
import Languages from './Languages'
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import Skills from './Skills';
import about from 'constants/about';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ rootMargin: '-25% 0px' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.about));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.about}>
      <Container ref={ref}>
        <SectionHeader
          title={about.title}
          Icon={HexagonSlice2}
        />
        <Message />
        <Languages />
        <Skills />
      </Container>
    </section>
  );
};

export default About;