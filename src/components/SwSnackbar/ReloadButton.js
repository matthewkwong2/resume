import { Button, ThemeProvider } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import app from 'constants/app';
import { darkTheme } from 'theme';

const ReloadButton = ({ onClose }) => {
  const handleClick = () => {
    onClose();
    window.location.reload();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Button color='primary' size='small' onClick={handleClick}>
        {app.reload}
      </Button>
    </ThemeProvider>
  );
};

ReloadButton.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ReloadButton;