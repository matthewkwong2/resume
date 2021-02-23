import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import data from 'constants/data';
import useSx from './useWorkingExperienceTimelineSx';

const WorkingExpTimeline = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <ExpTimeline
        data={data.work.experiences.map(({ period, position, company, description, proof }) => ({
          period,
          title: position,
          subheader: company,
          description,
          file: proof ? require(`assets/document/${proof}`).default : null
        }))}
      />
    </Box>
  );
};

export default WorkingExpTimeline;