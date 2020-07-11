import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgUser } from 'assets/icon/mbri-user.svg'

const User = props => (
  <SvgIcon {...props}>
    <SvgUser />
  </SvgIcon>
);

User.muiName = SvgIcon.muiName;

export default User;