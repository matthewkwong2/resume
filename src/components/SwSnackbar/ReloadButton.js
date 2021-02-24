import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import app from 'constants/app';

const ReloadButton = ({ onClose }) => {
  const handleReload = () => {
    onClose();
    window.location.reload();
  };

  return (
    <Button color='secondary' size='small' onClick={handleReload}>
      {app.reload}
    </Button>
  );
};

ReloadButton.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ReloadButton;