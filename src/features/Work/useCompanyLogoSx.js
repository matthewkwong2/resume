import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    filter: 'grayscale(100%)',
    height: 100,
    width: 'auto'
  }
}), []);

export default useSx;