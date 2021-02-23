import { AppBar, Collapse, IconButton, List, Toolbar } from '@material-ui/core';

import Logo from './Logo';
import { Menu } from 'components/icons';
import NavListItem from './NavListItem';
import nav from 'constants/nav';
import useActiveSectionId from 'hooks/useActiveSectionId';
import { useState } from 'react';
import useSx from './useNavBarSx';

const NavBarMobile = () => {
  const sx = useSx();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSectionId = useActiveSectionId();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <AppBar color='secondary' elevation={4}>
      <Toolbar>
        <Logo sx={sx.logo} />
        <IconButton onClick={handleMenuToggle} aria-label='toggle menu'>
          <Menu />
        </IconButton>
      </Toolbar>
      <Collapse in={menuOpen} timeout='auto' unmountOnExit>
        <List component='nav' aria-label='nav list'>
          {Object.values(nav).map(({ id, name }) => (
            <NavListItem
              key={id}
              id={id}
              label={name}
              active={activeSectionId === id}
            />
          ))}
        </List>
      </Collapse>
    </AppBar>
  );
};

export default NavBarMobile;