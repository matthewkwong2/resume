import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgLocation } from 'assets/icon/mbri-pin.svg'

const Location = props => (
  <SvgIcon {...props}>
    <SvgLocation />
  </SvgIcon>
);

Location.muiName = SvgIcon.muiName;

export default Location;
