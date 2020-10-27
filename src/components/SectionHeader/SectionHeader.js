import { Box, Divider, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  divider: {
    width: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const SectionHeader = ({ title, Icon }) => {
  const classes = useStyles();

  return (
    <header>
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
        <Icon />
        <Divider className={classes.divider} />
      </Box>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};

export default SectionHeader;