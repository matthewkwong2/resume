import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    height: '100%'
  },
  cardMedia: {
    height: 222
  }
});

const ProjectCard = ({ image, title, date, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography align='center' gutterBottom variant='h5'>
          {title}
        </Typography>
        <Typography align='center' gutterBottom variant='body1' >
          {date}
        </Typography>
        <Typography align='center' variant='body1' color='textSecondary'>
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