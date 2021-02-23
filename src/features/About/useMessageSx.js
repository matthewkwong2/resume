import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 3,
    pt: 3
  },
  hello: {
    textAlign: 'center',
    color: 'text.primary'
  },
  occupation: {
    textAlign: 'center',
    fontWeight: 400,
    color: 'text.secondary',
  },
  intro: {
    textAlign: 'center',
    maxWidth: 850,
    color: 'text.secondary'
  }
}), []);

export default useSx;