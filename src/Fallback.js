import { CircularProgress, Container, useMediaQuery } from '@material-ui/core';

import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }
}), []);


const Fallback = () => {
  const sx = useSx();

  const xs = useMediaQuery(theme => theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme => theme.breakpoints.only('sm'));
  const md = useMediaQuery(theme => theme.breakpoints.only('md'));


  return (
    <Container sx={sx.root}>
      <CircularProgress
        disableShrink
        size={
          xs
            ? '3.5rem'
            : sm
              ? '4.7129rem'
              : md
                ? '5.3556rem'
                : '5.9983rem'
        }
      />
    </Container>
  );
};

export default Fallback;