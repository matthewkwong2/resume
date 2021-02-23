import { Box, Typography } from '@material-ui/core';

import constants from 'constants/app';
import data from 'constants/data';
import useSx from './useCopyrightStatementSx';

const CopyrightStatement = () => {
  const sx = useSx();
  const prefix = constants.copyrightStatementPrefix;
  const year = new Date().getFullYear();
  const name = (
    <>
      <Box component='span' sx={sx.lastName}>
        {`${data.lastName}, `}
      </Box>
      {`${data.firstName} ${data.middleName}`}
    </>
  );
  const suffix = constants.copyrightStatementSuffix;

  return (
    <Typography sx={sx.root} variant='body2'>
      {`${prefix} ${year} `}
      {name}
      {suffix}
    </Typography>
  );
};

export default CopyrightStatement;