import { Box, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import { User } from 'components/icons';
import { memo } from 'react';
import useSx from './useEndorsementSx';

const Endorsement = ({ name, company, comment }) => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <User sx={sx.userIcon} />
      <Typography sx={sx.name} variant='h6'>
        {name}
      </Typography>
      <Typography sx={sx.company}>
        {company}
      </Typography>
      <Typography sx={sx.comment}>
        {comment}
      </Typography>
    </Box>
  );
};

Endorsement.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  comment: PropTypes.string
};

export default memo(Endorsement);