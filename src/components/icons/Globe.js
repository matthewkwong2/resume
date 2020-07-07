import React from 'react';
import { ReactComponent as SvgGlobe } from 'assets/icon/mbri-globe-2.svg'
import { SvgIcon } from '@material-ui/core';

const Globe = props => (
  <SvgIcon {...props}>
    <SvgGlobe />
  </SvgIcon>
);

Globe.muiName = SvgIcon.muiName;

export default Globe;
