import { Box, Typography } from '@material-ui/core';

import constants from 'constants/app';
import data from 'constants/data';
import useSx from './useMessageSx';

const Message = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.hello} variant='h5' component='h1' gutterBottom>
        {constants.helloPrefix}
        {data.firstName + ' ' + data.lastName}
        {constants.helloSuffix}
      </Typography>
      <Typography sx={sx.occupation} variant='h6' component='h2' gutterBottom>
        {data.occupations.join('　•　')}
      </Typography>
      <Typography sx={sx.intro}>
        {data.about.intro}
      </Typography>
    </Box>
  );
};

export default Message;