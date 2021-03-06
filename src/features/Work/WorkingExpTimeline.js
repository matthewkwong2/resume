import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import data from 'constants/data';

const WorkingExpTimeline = () => (
  <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
    <ExpTimeline
      data={data.work.experiences.map(({
        period,
        position,
        company,
        description,
        proof
      }) => ({
        period,
        title: position,
        subheader: company,
        description,
        file: proof ? require(`assets/document/${proof}`).default : null
      }))}
    />
  </Box>
);

export default WorkingExpTimeline;