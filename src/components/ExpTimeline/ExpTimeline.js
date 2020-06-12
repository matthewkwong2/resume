import { Box, useMediaQuery, useTheme } from '@material-ui/core';

import ExpTimelineItem from './ExpTimelineItem';
import PropTypes from 'prop-types';
import React from 'react';
import { Timeline } from '@material-ui/lab';

const ExpTimeline = ({ data = [] }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box width='100%' maxWidth={1000}>
      <Timeline align={smDown ? undefined : 'alternate'}>
        {data.map(({ period, title, subheader, description, file }, idx) => (
          <ExpTimelineItem
            key={idx}
            period={period}
            title={title}
            subheader={subheader}
            description={description}
            file={file}
          />
        ))}
      </Timeline>
    </Box>
  );
};

ExpTimeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.string
  }))
};

export default ExpTimeline;