import {
  AppBar,
  Collapse,
  IconButton,
  List,
  ThemeProvider,
  Toolbar,
  useScrollTrigger,
  useTheme
} from '@material-ui/core';
import React, { Fragment, useState } from 'react';

import Logo from './Logo';
import { Menu } from 'components/icons';
import NavListItem from './NavListItem';
import { darkTheme } from 'theme';
import nav from 'constants/nav';
import useActiveSection from 'hooks/useActiveSection';

const NavBarMobile = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const color = trigger || menuOpen ? 'inherit' : theme.props?.MuiAppBar?.color;
  const elevation = trigger || menuOpen ? 4 : theme.props?.MuiAppBar?.elevation;

  const activeSection = useActiveSection();

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navBarContent = (
    <Fragment>
      <Logo />
      <IconButton
        onClick={handleMenuButtonClick}
        aria-label={menuOpen ? 'close menu' : 'open menu'}
      >
        <Menu />
      </IconButton>
    </Fragment>
  );

  return (
    <AppBar color={color} elevation={elevation}>
      <Toolbar>
        {
          trigger || menuOpen
            ? navBarContent
            : (
              <ThemeProvider theme={darkTheme}>
                {navBarContent}
              </ThemeProvider>
            )
        }
      </Toolbar>
      <Collapse in={menuOpen} timeout='auto' unmountOnExit>
        <List component='nav' aria-label='navigation list'>
          {Object.keys(nav).map(key => (
            <NavListItem
              key={nav[key]}
              label={nav[key]}
              id={nav[key]}
              active={activeSection === nav[key]}
            />
          ))}
        </List>
      </Collapse>
    </AppBar>
  );
};

export default NavBarMobile;