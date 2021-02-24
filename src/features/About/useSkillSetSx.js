import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    mt: 6
  }
}), []);

export default useSx;