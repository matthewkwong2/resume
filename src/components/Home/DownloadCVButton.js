import { Box, Button } from '@material-ui/core';

import React from 'react';
import cv from 'assets/document/cv.pdf'
import home from 'constants/home';

const DownloadCVButton = () => (
  <Box mt={4}>
    <Button
      variant='outlined'
      size='large'
      href={cv}
      target='_blank'
      rel='noopener noreferrer'
    >
      {home.downloadCVButtonText}
    </Button>
  </Box>
);

export default DownloadCVButton;