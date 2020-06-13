import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgMobile } from 'assets/icon/mbri-mobile2.svg'

const Mobile = props => (
  <SvgIcon {...props}>
    <SvgMobile />
  </SvgIcon>
);

Mobile.muiName = SvgIcon.muiName;

export default Mobile;
