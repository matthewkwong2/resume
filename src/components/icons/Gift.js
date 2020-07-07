import React from 'react';
import { ReactComponent as SvgGift } from 'assets/icon/mbri-gift.svg'
import { SvgIcon } from '@material-ui/core';

const Gift = props => (
  <SvgIcon {...props}>
    <SvgGift />
  </SvgIcon>
);

Gift.muiName = SvgIcon.muiName;

export default Gift;
