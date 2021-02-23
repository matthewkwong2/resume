import { Box } from '@material-ui/core';
import PaginationItem from './PaginationItem';
import PropTypes from 'prop-types';
import useSx from './usePaginationSx';

const Pagination = ({ count = 1, onChangeIndex, index }) => {
  const sx = useSx();
  const handleSelectIndex = idx => () => onChangeIndex && onChangeIndex(idx);

  return (
    <Box sx={sx.root}>
      {[...Array(count)].map((_, idx) => (
        <PaginationItem
          key={idx}
          active={idx === index}
          onClick={handleSelectIndex(idx)}
          idx={idx}
        />
      ))}
    </Box>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  onChangeIndex: PropTypes.func,
  index: PropTypes.number
};

export default Pagination;