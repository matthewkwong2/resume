import { Box, Button } from '@material-ui/core';

import React from 'react';
import home from 'constants/home';

const DownloadCVButton = () => (
  <Box mt={4}>
    <Button variant='outlined' size='large'>
      {home.downloadCVButtonText}
    </Button>
  </Box>
);

export default DownloadCVButton;