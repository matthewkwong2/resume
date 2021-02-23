import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  logo: {
    marginRight: 'auto'
  }
}), []);

export default useSx;