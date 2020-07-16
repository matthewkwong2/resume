import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Email = props => (
  <SvgIcon {...props}>
    <path d='M2.5 6c-.5 0-.683.646-.278.916l7.998 5.496c.49.337 1.08.588 1.78.588s1.295-.25 1.785-.588l7.997-5.496c.552-.374-.06-1.176-.566-.824L13.22 11.59c-.38.26-.75.41-1.22.41s-.836-.15-1.214-.41L2.788 6.09C2.706 6.034 2.6 6.002 2.5 6zm-1-2C.678 4 0 4.678 0 5.5v13c0 .822.678 1.5 1.5 1.5h21c.822 0 1.5-.678 1.5-1.5v-13c0-.822-.678-1.5-1.5-1.5zm0 1h21c.286 0 .5.214.5.5v13c0 .286-.214.5-.5.5h-21c-.286 0-.5-.214-.5-.5v-13c0-.286.214-.5.5-.5z' />
  </SvgIcon>
);

Email.muiName = SvgIcon.muiName;

export default Email;
