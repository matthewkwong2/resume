import { Container } from '@material-ui/core';
import { HexagonSlice1 } from 'mdi-material-ui';
import Languages from './Languages';
import Message from './Message';
import SectionHeader from 'components/SectionHeader';
import SkillSet from './SkillSet';
import about from 'constants/about';
import nav from 'constants/nav';

const About = () => (
  <section id={nav.about}>
    <Container>
      <SectionHeader
        title={about.title}
        Icon={HexagonSlice1}
      />
      <Message />
      <Languages />
      <SkillSet />
    </Container>
  </section>
);

export default About;