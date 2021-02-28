import { Box, Container } from '@material-ui/core';
import { Suspense, lazy } from 'react';

import { HexagonSlice1 } from 'mdi-material-ui';
import LanguagesFallback from './LanguagesFallback';
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import SkillSet from './SkillSet';
import constants from 'constants/app';
import nav from 'constants/nav';
import { useInView } from 'react-intersection-observer';

const Languages = lazy(() => import('./Languages'));

const LazyLanguages = () => (
  <Suspense fallback={<LanguagesFallback />}>
    <Languages />
  </Suspense>
);

const About = () => {
  const { ref, inView } = useInView({
    rootMargin: '50%',
    triggerOnce: true,
  });

  return (
    <Container component='section' id={nav.about.id}>
      <SectionHeader
        heading={constants.aboutMe}
        Icon={HexagonSlice1}
      />
      <Message />
      <Box ref={ref}>
        {inView ? <LazyLanguages /> : <LanguagesFallback />}
      </Box>
      <SkillSet />
    </Container>
  );
};

export default About;