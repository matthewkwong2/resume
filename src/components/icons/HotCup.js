import React from 'react';
import { ReactComponent as SvgHotCup } from 'assets/icon/mbri-hot-cup.svg'
import { SvgIcon } from '@material-ui/core';

const HotCup = props => (
  <SvgIcon {...props}>
    <SvgHotCup />
  </SvgIcon>
);

HotCup.muiName = SvgIcon.muiName;

export default HotCup;
