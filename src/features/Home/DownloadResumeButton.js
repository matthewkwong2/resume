import { Button } from '@material-ui/core';
import constants from 'constants/app';
import resume from 'assets/document/resume.pdf';

const DownloadResumeButton = ({ sx }) => (
  <Button
    sx={sx}
    variant='outlined'
    size='large'
    href={resume}
    target='_blank'
    rel='noopener noreferrer'
  >
    {constants.downloadResumeButtonText}
  </Button>
);

export default DownloadResumeButton;