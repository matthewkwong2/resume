import React, { memo, useState } from 'react';

import { Box } from '@material-ui/core';
import Endorsement from './Endorsement';
import Pagination from './Pagination';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import data from 'constants/data';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = idx => {
    setIndex(idx);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt={3} pt={3}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        resistance
        interval={10000}
      >
        {data.testimonial.references.map(({ name, company, comment }) => (
          <Endorsement
            key={name}
            name={name}
            company={company}
            comment={comment}
          />
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        count={data.testimonial.references.length}
        index={index}
        onChangeIndex={handleChangeIndex}
      />
    </Box >
  );
};

export default memo(Carousel);