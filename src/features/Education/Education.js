import { Container } from '@material-ui/core';
import EducationalExpTimeline from './EducationalExpTimeline';
import { HexagonSlice2 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import education from 'constants/education';
import nav from 'constants/nav';

const Education = () => (
  <section id={nav.education}>
    <Container>
      <SectionHeader
        title={education.title}
        Icon={HexagonSlice2}
      />
      <EducationalExpTimeline />
    </Container>
  </section>
);

export default Education;