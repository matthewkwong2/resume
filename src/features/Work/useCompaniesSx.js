import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    mt: 3,
    pt: 3,
    justifyContent: 'space-evenly'
  }
}), []);

export default useSx;