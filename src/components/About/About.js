import { Container } from '@material-ui/core';
import { HexagonSlice2 } from 'mdi-material-ui'
import Languages from './Languages'
import Message from './Message';
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import Skills from './Skills';
import about from 'constants/about';
import nav from 'constants/nav';

const About = () => (
  <section id={nav.about}>
    <Container>
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

export default About;