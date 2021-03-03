import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  logo: {
    marginRight: 'auto'
  },
  navList: {
    bgcolor: 'background.paper'
  }
}), []);

export default useSx;