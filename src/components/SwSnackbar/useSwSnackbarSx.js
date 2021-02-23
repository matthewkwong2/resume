import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    transition: theme => theme.transitions.create('bottom', {
      duration: theme.transitions.duration.standard,
    })
  },
  hasFab: {
    bottom: {
      md: theme => theme.spacing(9)
    }
  }
}), []);

export default useSx;