import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import useSx from './useCompanyLogoSx';

const CompanyLogo = ({ src, alt = '', href }) => {
  const sx = useSx();

  const image = (
    <Box
      component='img'
      sx={sx.img}
      src={src}
      alt={alt}
      loading='lazy'
    />
  );

  return (
    <Box sx={sx.root}>
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