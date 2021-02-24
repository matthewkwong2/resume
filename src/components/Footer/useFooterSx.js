import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  container: {

  },
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 3,
    px: {
      sm: 5,
      xl: 0
    }
  }
}), []);

export default useSx;