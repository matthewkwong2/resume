import Companies from './Companies';
import { Container } from '@material-ui/core';
import { HexagonSlice4 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import WorkingExpTimeline from './WorkingExpTimeline';
import nav from 'constants/nav';
import work from 'constants/work';

const Work = () => (
  <section id={nav.work}>
    <Container>
      <SectionHeader
        title={work.title}
        Icon={HexagonSlice4}
      />
      <WorkingExpTimeline />
      <Companies />
    </Container>
  </section>
);

export default Work;