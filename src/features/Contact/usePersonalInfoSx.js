import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    p: 4
  }
}), []);

export default useSx;