import { Fragment } from 'react';
import { Hidden } from '@material-ui/core';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const NavBar = () => (
  <Fragment>
    <Hidden smDown>
      <NavBarDesktop />
    </Hidden>
    <Hidden mdUp>
      <NavBarMobile />
    </Hidden>
  </Fragment>
);

export default NavBar;