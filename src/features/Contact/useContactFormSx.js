import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  submitButton: {
    float: 'right',
    mt: 2
  }
}), []);

export default useSx;