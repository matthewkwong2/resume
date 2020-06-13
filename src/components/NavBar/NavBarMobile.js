import { AppBar, Collapse, IconButton, List, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';

import Logo from './Logo';
import { Menu } from 'components/icons';
import NavListItem from './NavListItem';
import { getCurrentSection } from 'selectors';
import nav from 'constants/nav';
import { useSelector } from 'react-redux';

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentSection = useSelector(getCurrentSection);

  const handleMenuButtonClick = () => setMenuOpen(!menuOpen);

  return (
    <AppBar color='inherit' elevation={4}>
      <Toolbar>
        <Logo />
        <IconButton onClick={handleMenuButtonClick}>
          <Menu />
        </IconButton>
      </Toolbar>
      <Collapse in={menuOpen} timeout='auto' unmountOnExit>
        <List component='nav' aria-label='navigation list'>
          {Object.values(nav).map(id => (
            <NavListItem
              key={id}
              label={id}
              id={id}
              active={currentSection === id}
            />
          ))}
        </List>
      </Collapse>
    </AppBar>
  );
};

export default NavBarMobile;