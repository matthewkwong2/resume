import { Container } from '@material-ui/core';
import EducationalExpTimeline from './EducationalExpTimeline';
import { HexagonSlice2 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import constants from 'constants/app';
import nav from 'constants/nav';

const Education = () => (
  <Container component='section' id={nav.education.id}>
    <SectionHeader
      heading={constants.education}
      Icon={HexagonSlice2}
    />
    <EducationalExpTimeline />
  </Container>
);

export default Education;