import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  card: {
    height: '100%'
  },
  cardMedia: {
    height: 222
  },
  title: {
    textAlign: 'center'
  },
  date: {
    textAlign: 'center'
  },
  description: {
    color: 'text.secondary'
  }
}), []);

export default useSx;