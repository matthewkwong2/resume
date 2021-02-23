import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    px: 4,
    py: 4
  }
}), []);

export default useSx;