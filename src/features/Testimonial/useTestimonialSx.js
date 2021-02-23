import bg from './bg';
import { createBackground } from 'theme';
import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: createBackground(bg),
  carouselContainer: {
    minHeight: 350
  }
}), []);

export default useSx;