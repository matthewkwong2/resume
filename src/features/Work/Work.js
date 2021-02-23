import Companies from './Companies';
import { Container } from '@material-ui/core';
import { HexagonSlice3 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import WorkingExpTimeline from './WorkingExpTimeline';
import constants from 'constants/app';
import nav from 'constants/nav';

const Work = () => (
  <Container component='section' id={nav.work.id}>
    <SectionHeader
      heading={constants.workingExperience}
      Icon={HexagonSlice3}
    />
    <WorkingExpTimeline />
    <Companies />
  </Container>
);

export default Work;