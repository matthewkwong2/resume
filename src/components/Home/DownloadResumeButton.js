import { Box, Button } from '@material-ui/core';

import React from 'react';
import home from 'constants/home';
import resume from 'assets/document/resume.pdf'

const DownloadResumeButton = () => (
  <Box mt={4}>
    <Button
      variant='outlined'
      color='primary'
      size='large'
      href={resume}
      target='_blank'
      rel='noopener noreferrer'
    >
      {home.downloadCVButtonText}
    </Button>
  </Box>
);

export default DownloadResumeButton;