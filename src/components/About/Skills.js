import { Box, Grid } from '@material-ui/core';

import React from 'react';
import SkillRating from './SkillRating';
import data from 'constants/data';

const Skills = () => (
  <Box overflow='hidden' mt={6}>
    <Grid container spacing={6}>
      {data.about.skills.map(({ name, rating }) => (
        <Grid key={name} item sm={6} xs={12}>
          <SkillRating
            name={name}
            rating={rating}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;