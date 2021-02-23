import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    filter: 'grayscale(100%)'
  }
}), []);

export default useSx;