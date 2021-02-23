import { ButtonBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import useSx from './usePaginationItemSx';

const PaginationItem = ({ active = false, onClick, idx }) => {
  const sx = useSx({ active });

  return (
    <ButtonBase
      sx={sx.root}
      onClick={onClick}
      aria-label={'go to page ' + idx}
    />
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  idx: PropTypes.number
};

export default PaginationItem;