import React from 'react';
import { ReactComponent as SvgDownload } from 'assets/icon/mbri-download.svg'
import { SvgIcon } from '@material-ui/core';

const Download = props => (
  <SvgIcon {...props}>
    <SvgDownload />
  </SvgIcon>
);

Download.muiName = SvgIcon.muiName;

export default Download;
