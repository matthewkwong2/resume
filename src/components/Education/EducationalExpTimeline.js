import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import React from 'react';
import data from 'constants/data';

const EducationalExpTimeline = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
      <ExpTimeline
        data={data.education.experiences.map(({
          period,
          school,
          subject,
          description
        }) => ({
          period,
          title: subject,
          subheader: school,
          description
        }))}
      />
    </Box>
  );
};

export default EducationalExpTimeline;