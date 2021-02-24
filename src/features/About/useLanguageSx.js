import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    height: 300,
    mt: 6
  }
}), []);

export default useSx;