import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgMenu } from 'assets/icon/mbri-menu.svg'

const Menu = props => (
  <SvgIcon {...props}>
    <SvgMenu />
  </SvgIcon>
);

Menu.muiName = SvgIcon.muiName;

export default Menu;
