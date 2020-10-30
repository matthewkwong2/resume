import { Box } from '@material-ui/core';
import PaginationItem from './PaginationItem';
import PropTypes from 'prop-types';

const Pagination = ({ count = 1, onChangeIndex, index }) => {
  const handleSelectIndex = idx => () => {
    onChangeIndex(idx);
  };

  return (
    <Box display='flex'>
      {[...new Array(count)].map((_, idx) => (
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