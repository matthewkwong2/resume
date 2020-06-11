import { Box, useTheme } from '@material-ui/core';
import React, { memo } from 'react';

import { ResponsiveRadar } from '@nivo/radar';
import data from 'constants/data';

const Languages = () => {
  const theme = useTheme();
  const keys = ['rating'];
  const margin = {
    top: theme.spacing(3),
    right: theme.spacing(6),
    bottom: 0,
    left: theme.spacing(6)
  };

  return (
    <Box height={300} mt={6}>
      <ResponsiveRadar
        data={data.about.languages}
        indexBy='name'
        keys={keys}
        maxValue={100}
        colors={theme.palette.primary.main}
        isInteractive={false}
        enableDots={false}
        borderWidth={0}
        fillOpacity={1}
        margin={margin}
      />
    </Box>
  );
};

export default memo(Languages);