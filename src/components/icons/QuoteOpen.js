import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SvgQuoteOpen } from 'assets/icon/mbri-quote-left.svg'

const QuoteOpen = props => (
  <SvgIcon {...props}>
    <SvgQuoteOpen />
  </SvgIcon>
);

QuoteOpen.muiName = SvgIcon.muiName;

export default QuoteOpen;