import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import { memo } from 'react';
import useSx from './useProjectCardSx';

const ProjectCard = ({ image, title, date, description }) => {
  const sx = useSx();

  return (
    <Card sx={sx.card} elevation={0}>
      <CardMedia component='picture' sx={sx.cardMedia}>
        <source srcSet={image.webp} type='image/webp' />
        <img src={image.png} alt={title} loading='lazy' />
      </CardMedia>
      <CardContent>
        <Typography sx={sx.title} variant='h5' gutterBottom>
          {title}
        </Typography>
        <Typography sx={sx.date} gutterBottom>
          {date}
        </Typography>
        <Typography sx={sx.description}>
          {description}
        </Typography>
      </CardContent>
    </Card >
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

export default memo(ProjectCard);