import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex'
  }
}), []);

export default useSx;