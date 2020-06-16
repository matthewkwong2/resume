import { Box, Grid } from '@material-ui/core';

import React from 'react';
import SkillRating from './SkillRating';
import data from 'constants/data';

const Skills = () => {
  const mid = Math.ceil(data.about.skills.length / 2);

  return (
    <Box overflow='hidden' mt={6}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <div>
            {data.about.skills.splice(0, mid).map(({ name, rating }) => (
              <SkillRating
                key={name}
                name={name}
                rating={rating}
              />
            ))}
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div>
            {data.about.skills.splice(-mid).map(({ name, rating }) => (
              <SkillRating
                key={name}
                name={name}
                rating={rating}
              />
            ))}
          </div>
        </Grid>
        {/* {data.about.skills.map(({ name, rating }) => (
          <Grid key={name} item sm={6} xs={12}>
            <SkillRating
              name={name}
              rating={rating}
            />
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
};

export default Skills;