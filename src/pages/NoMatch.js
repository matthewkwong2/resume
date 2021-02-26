import { Button, Container, Typography } from '@material-ui/core';
import { useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';
import constants from 'constants/app';
import routes from 'constants/routes';

const useSx = props => useMemo(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  404: {
    textAlign: 'center',
    color: 'text.primary',
    fontFamily: 'Azonix'
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
        {constants['404']}
      </Typography>
      <Typography sx={sx.message}>
        {constants['404Message']}
      </Typography>
      <Button
        sx={sx.backHome}
        component={Link}
        variant='contained'
        size='large'
        to={routes.main.path}
      >
        {constants.goHome}
      </Button>
    </Container>
  );
};

export default NoMatch;