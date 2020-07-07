import { Button, ThemeProvider } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';
import app from 'constants/app';
import { darkTheme } from 'theme';
import { getSwRegistration } from 'selectors';
import { useSelector } from 'react-redux';

const ReloadButton = ({ onClose }) => {
  const swRegistration = useSelector(getSwRegistration);
  const handleClick = () => {
    onClose();
    if (swRegistration && swRegistration.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
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