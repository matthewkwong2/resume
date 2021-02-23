import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    textAlign: 'center',
    color: 'text.secondary'
  },
  lastName: {
    textTransform: 'capitalize'
  }
}), []);

export default useSx;