import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  heading: {
    textAlign: 'center',
    color: 'text.primary',
    textTransform: 'capitalize'
  },
  divider: {
    width: 32,
    mx: 1
  },
  separatorContainer: {
    display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
}), []);

export default useSx;