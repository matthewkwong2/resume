import { Hidden } from '@material-ui/core';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const NavBar = () => (
  <>
    <Hidden mdDown>
      <NavBarDesktop />
    </Hidden>
    <Hidden mdUp>
      <NavBarMobile />
    </Hidden>
  </>
);

export default NavBar;