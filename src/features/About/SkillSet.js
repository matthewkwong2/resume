import { Box, Grid } from '@material-ui/core';

import SkillRating from './SkillRating';
import data from 'constants/data';

const SkillSet = () => {
  const mid = Math.ceil(data.about.skills.length / 2);

  return (
    <Box overflow='hidden' mt={6}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <div>
            {data.about.skills.slice(0, mid).map(({ name, rating }) => (
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
            {data.about.skills.slice(-mid).map(({ name, rating }) => (
              <SkillRating
                key={name}
                name={name}
                rating={rating}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillSet;