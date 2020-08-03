import {
  AppBar,
  ThemeProvider,
  Toolbar,
  useScrollTrigger,
  useTheme
} from '@material-ui/core';
import React, { Fragment } from 'react';

import Logo from './Logo';
import NavButton from './NavButton';
import { darkTheme } from 'theme';
import nav from 'constants/nav';
import useActiveSectionId from 'hooks/useActiveSectionId';

const NavBarDesktop = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  const activeSection = useActiveSectionId();

  const color = trigger ? 'inherit' : theme.props?.MuiAppBar?.color;
  const elevation = trigger ? 4 : theme.props?.MuiAppBar?.elevation;

  const navBarContent = (
    <Fragment>
      <Logo />
      <nav>
        {Object.keys(nav).map(key => (
          <NavButton
            key={nav[key]}
            id={nav[key]}
            label={nav[key]}
            active={activeSection === nav[key]}
          />
        ))}
      </nav>
    </Fragment>
  );

  return (
    <AppBar color={color} elevation={elevation}>
      <Toolbar>
        {
          trigger
            ? navBarContent
            : (
              <ThemeProvider theme={darkTheme}>
                {navBarContent}
              </ThemeProvider>
            )
        }
      </Toolbar>
    </AppBar>
  );
};

export default NavBarDesktop;