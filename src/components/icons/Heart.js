import React from 'react';
import { ReactComponent as SvgHeart } from 'assets/icon/mbri-hearth.svg'
import { SvgIcon } from '@material-ui/core';

const Heart = props => (
  <SvgIcon {...props}>
    <SvgHeart />
  </SvgIcon>
);

Heart.muiName = SvgIcon.muiName;

export default Heart;
