import { Box, useTheme } from '@material-ui/core';

import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import data from 'constants/data';

const Languages = () => {
  const theme = useTheme();
  const keys = ['rating'];
  const margin = {
    top: theme.spacing(3),
    right: theme.spacing(6.25),
    bottom: 0,
    left: theme.spacing(6.25)
  };
  const nivoTheme = {
    fontFamily: theme.typography.fontFamily
  };

  return (
    <Box height={300} mt={6}>
      <ResponsiveRadar
        data={data.about.languages}
        indexBy='name'
        keys={keys}
        colors={theme.palette.primary.main}
        isInteractive={false}
        enableDots={false}
        borderWidth={0}
        fillOpacity={1}
        margin={margin}
        theme={nivoTheme}
      />
    </Box>
  );
};

export default Languages;