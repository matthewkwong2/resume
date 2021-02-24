import { Suspense, lazy } from 'react';

import { Container } from '@material-ui/core';
import { HexagonSlice1 } from 'mdi-material-ui';
import LanguagesFallback from './LanguagesFallback';
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import SkillSet from './SkillSet';
import constants from 'constants/app';
import nav from 'constants/nav';

const Languages = lazy(() => import('./Languages'));


const About = () => (
  <Container component='section' id={nav.about.id}>
    <SectionHeader
      heading={constants.aboutMe}
      Icon={HexagonSlice1}
    />
    <Message />
    <Suspense fallback={<LanguagesFallback />}>
      <Languages />
    </Suspense>
    <SkillSet />
  </Container>
);

export default About;