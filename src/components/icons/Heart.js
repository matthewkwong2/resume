import { SvgIcon } from '@material-ui/core';

const Heart = props => (
  <SvgIcon {...props}>
    <path d='M6.5 2c-1.71 0-3.336.8-4.514 1.984C.806 5.172 0 6.834 0 8.5c0 1.936.615 3.838 1.717 5.424 1.09 1.568 2.518 2.827 3.974 3.97 1.915 1.5 3.95 2.852 6.066 4.042.076.042.16.064.244.064.084 0 .168-.022.244-.064 2.116-1.19 4.14-2.543 6.055-4.043 1.455-1.142 2.884-2.4 3.973-3.97C23.373 12.34 24 10.44 24 8.5c0-1.67-.818-3.33-1.996-4.516C20.822 2.794 19.162 2 17.49 2c-1.162 0-2.35.228-3.404.803-.865.472-1.514 1.23-2.086 2.027-.575-.798-1.23-1.556-2.096-2.027C8.854 2.23 7.684 2 6.5 2zm0 1c1.055 0 2.05.204 2.924.682.882.48 1.64 1.207 2.144 2.07.193.33.67.33.864 0 .506-.865 1.253-1.59 2.134-2.07C15.44 3.206 16.46 3 17.49 3c1.348 0 2.8.676 3.803 1.688C22.3 5.702 23 7.168 23 8.5c0 1.722-.56 3.432-1.547 4.854-.998 1.437-2.347 2.637-3.77 3.753-1.798 1.41-3.704 2.666-5.683 3.795-1.98-1.13-3.895-2.386-5.69-3.795-1.426-1.116-2.774-2.316-3.773-3.753C1.55 11.934 1 10.224 1 8.5c0-1.334.69-2.798 1.697-3.813C3.707 3.671 5.107 3 6.5 3z' />
  </SvgIcon>
);

Heart.muiName = SvgIcon.muiName;

export default Heart;
