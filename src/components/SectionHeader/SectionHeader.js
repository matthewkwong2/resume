import {
  Box,
  Divider,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    width: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const SectionHeader = ({ title, Icon }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography
        gutterBottom
        align='center'
        color='textPrimary'
        variant='h4'
      >
        {title}
      </Typography>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Divider className={classes.divider} />
        {
          Icon.muiName === 'SvgIcon'
            ? <Icon />
            : (
              <SvgIcon>
                <Icon />
              </SvgIcon>
            )
        }
        <Divider className={classes.divider} />
      </Box>
    </Box>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};

export default SectionHeader;