import bg from './bg';
import { createBackground } from 'theme';
import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: createBackground(bg)
}), []);

export default useSx;