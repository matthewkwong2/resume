import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    '&:not(:first-of-type):not(:last-of-type)': {
      my: 6
    }
  },
  ratingContainer: {
    display: 'flex'
  },
  skillName: {
    color: 'text.primary',
    flexGrow: 1,
    fontWeight: 'bold'
  },
  ratingText: {
    color: 'text.secondary',
  },
  rating: {
    bgcolor: '#eceff4'
  }
}), []);

export default useSx;