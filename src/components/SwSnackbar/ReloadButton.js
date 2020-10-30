import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import app from 'constants/app';

const ReloadButton = ({ onClose }) => {
  const handleClick = () => {
    onClose();
    window.location.reload();
  };

  return (
    <Button color='secondary' size='small' onClick={handleClick}>
      {app.reload}
    </Button>
  );
};

ReloadButton.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ReloadButton;