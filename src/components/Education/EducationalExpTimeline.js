import { Box } from '@material-ui/core';
import ExpTimeline from 'components/ExpTimeline';
import React from 'react';
import data from 'constants/data';

const EducationalExpTimeline = () => (
  <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
    <ExpTimeline
      data={data.education.experiences.map(({
        period,
        school,
        subject,
        description,
        proof
      }) => ({
        period,
        title: subject,
        subheader: school,
        description,
        file: require(`assets/document/${proof}`)
      }))}
    />
  </Box>
);

export default EducationalExpTimeline;