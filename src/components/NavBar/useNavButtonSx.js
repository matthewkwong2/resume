import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    '&:not(:first-of-type):not(:last-of-type)': {
      mx: 1,
    }
  },
  active: {
    height: 3,
    width: 16,
    bgcolor: 'text.primary',
    position: 'absolute',
    bottom: 0,
    left: theme => `calc(50% - ${theme.spacing(1)})`
  }
}), []);

export default useSx;