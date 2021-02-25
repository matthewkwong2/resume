import { useMemo } from 'react';
import { useTheme } from '@material-ui/core';

const useSx = props => {
  const theme = useTheme();

  return useMemo(() => ({
    container: {

    },
    gridContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 3,
      [theme.breakpoints.between('sm', 'xl')]: {
        px: 5
      }
    }
  }), [theme.breakpoints]);
};

export default useSx;