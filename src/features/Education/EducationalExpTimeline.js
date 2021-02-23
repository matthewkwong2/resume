import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import data from 'constants/data';
import useSx from './useEducationalExpTimelineSx';

const EducationalExpTimeline = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <ExpTimeline
        data={data.education.experiences.map(({ period, school, subject, description, proof }) => ({
          period,
          title: subject,
          subheader: school,
          description,
          file: require(`assets/document/${proof}`).default
        }))}
      />
    </Box>
  );
};

export default EducationalExpTimeline;