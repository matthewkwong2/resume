import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    height: 300,
    mt: 6,
    mx: 'auto',
    width: '100%',
    maxWidth: 400
  }
}), []);

export default useSx;