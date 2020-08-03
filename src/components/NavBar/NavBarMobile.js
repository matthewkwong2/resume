import { AppBar, Collapse, IconButton, List, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';

import Logo from './Logo';
import { Menu } from 'components/icons';
import NavListItem from './NavListItem';
import nav from 'constants/nav';
import useActiveSectionId from 'hooks/useActiveSectionId';

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSectionId();

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar color='inherit' elevation={4}>
      <Toolbar>
        <Logo />
        <IconButton
          onClick={handleMenuButtonClick}
          aria-label={menuOpen ? 'close menu' : 'open menu'}
        >
          <Menu />
        </IconButton>
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