import { Container } from '@material-ui/core';
import { HexagonSlice1 } from 'mdi-material-ui';
import Languages from './Languages';
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import SkillSet from './SkillSet';
import constants from 'constants/app';
import nav from 'constants/nav';

const About = () => (
  <Container component='section' id={nav.about.id}>
    <SectionHeader
      heading={constants.aboutMe}
      Icon={HexagonSlice1}
    />
    <Message />
    <Languages />
    <SkillSet />
  </Container>
);

export default About;