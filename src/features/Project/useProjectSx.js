import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  gridContainer: {
    mt: 3,
    pt: 3
  }
}), []);

export default useSx;