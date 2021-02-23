import bg from './bg';
import { createBackground } from 'theme';
import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    p: 0,
    height: '100vh',
    ...createBackground(bg)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  socialMedia: {
    mt: 3
  },
  downloadResumeButton: {
    mt: 4
  }
}), []);

export default useSx;