import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    filter: 'grayscale(100%)'
  }
});

const CompanyLogo = ({ src, alt = '', href }) => {
  const classes = useStyles();

  const image = (
    <img
      src={src}
      className={classes.img}
      alt={alt}
      height={100}
    />
  );

  return (
    <Box display='flex' justifyContent='center'>
      {
        href
          ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {image}
            </a>
          )
          : image
      }
    </Box>
  );
};

CompanyLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  href: PropTypes.string,
};

export default CompanyLogo;