import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgUsers } from 'assets/icon/mbri-users.svg'

const Users = props => (
  <SvgIcon {...props}>
    <SvgUsers />
  </SvgIcon>
);

Users.muiName = SvgIcon.muiName;

export default Users;
