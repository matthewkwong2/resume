import { AppBar, Toolbar, useScrollTrigger, useTheme } from '@material-ui/core';

import Logo from './Logo';
import NavButton from './NavButton';
import ThemeProvider from 'components/ThemeProvider';
import nav from 'constants/nav';
import useActiveSectionId from 'hooks/useActiveSectionId';
import useSx from './useNavBarSx';

const NavBarDesktop = () => {
  const sx = useSx();
  const theme = useTheme();
  const appBarDefaultProps = {
    color: theme.components.MuiAppBar.defaultProps.color,
    elevation: theme.components.MuiAppBar.defaultProps.elevation
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const activeSectionId = useActiveSectionId();

  const color = trigger ? 'secondary' : appBarDefaultProps.color;
  const elevation = trigger ? 4 : appBarDefaultProps.elevation;

  return (
    <AppBar color={color} elevation={elevation}>
      <Toolbar>
        <ThemeProvider mode={trigger ? 'light' : 'dark'}>
          <Logo sx={sx.logo} />
          <nav>
            {Object.values(nav).map(({ id, name }) => (
              <NavButton
                key={id}
                id={id}
                label={name}
                active={activeSectionId === id}
              />
            ))}
          </nav>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarDesktop;