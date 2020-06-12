import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import React from 'react';
import data from 'constants/data';

const WorkingExpTimeline = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
      <ExpTimeline
        data={data.work.experiences.map(({
          period,
          position,
          company,
          description
        }) => ({
          period,
          title: position,
          subheader: company,
          description
        }))}
      />
    </Box>
  );
};

export default WorkingExpTimeline;