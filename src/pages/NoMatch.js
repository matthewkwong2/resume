import { Button, Container, Typography } from '@material-ui/core';
import { useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';
import routes from 'constants/routes';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  404: {
    textAlign: 'center',
    color: 'text.primary'
  },
  message: {
    textAlign: 'center',
    color: 'text.primary',
    textTransform: 'uppercase',
    mt: 3
  },
  backHome: {
    mt: 3
  }
}), []);

const NoMatch = () => {
  const sx = useSx();

  useEffect(() => document.title = routes.noMatch.title, []);

  return (
    <Container sx={sx.root}>
      <Typography sx={sx[404]} variant='h1'>
        404
      </Typography>
      <Typography sx={sx.message}>
        The page you were looking for does not exist.
      </Typography>
      <Button
        sx={sx.backHome}
        component={Link}
        variant='contained'
        size='large'
        to={routes.main.path}
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NoMatch;