import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 3
  }
}), []);

export default useSx;