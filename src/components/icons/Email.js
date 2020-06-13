import React from 'react';
import { ReactComponent as SvgEmail } from 'assets/icon/mbri-letter.svg'
import { SvgIcon } from '@material-ui/core';

const Email = props => (
  <SvgIcon {...props}>
    <SvgEmail />
  </SvgIcon>
);

Email.muiName = SvgIcon.muiName;

export default Email;
