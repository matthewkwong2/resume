import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import useSx from './useProjectCardSx';

const ProjectCard = ({ image, title, date, description }) => {
  const sx = useSx();

  return (
    <Card sx={sx.card} elevation={0}>
      <CardMedia sx={sx.cardMedia} image={image} title={title} />
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
    </Card>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

export default ProjectCard;