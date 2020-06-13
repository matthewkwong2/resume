import React from 'react';
import { ReactComponent as SvgArrowUp } from 'assets/icon/mbri-arrow-up.svg'
import { SvgIcon } from '@material-ui/core';

const ArrowUp = props => (
  <SvgIcon {...props}>
    <SvgArrowUp />
  </SvgIcon>
);

ArrowUp.muiName = SvgIcon.muiName;

export default ArrowUp;
