import { Box, Grid, Skeleton, Typography } from '@material-ui/core';

import useSx from './useContactContentFallbackSx';

const ContactFallback = () => {
  const sx = useSx();

  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={12}>
        <Box sx={sx.personalInfoContainer}>
          <PersonalInfoItemFallback />
          <PersonalInfoItemFallback />
          <PersonalInfoItemFallback />
        </Box>
      </Grid>
      <Grid item md xs={12}>
        <ContactFormFallback />
      </Grid>
    </Grid>
  );
};

const PersonalInfoItemFallback = () => {
  const sx = useSx();
  return (
    <Box sx={sx.personalInfoItemContainer}>
      <Skeleton sx={sx.icon} variant='circular' />
      <Typography sx={sx.personalInfoItemTitle} gutterBottom>
        <Skeleton />
      </Typography>
      <Typography sx={sx.personalInfoItemValue} gutterBottom>
        <Skeleton />
      </Typography>
    </Box>
  );
};

const ContactFormFallback = () => {
  const sx = useSx();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <Skeleton sx={sx.textField} variant='rectangular' />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Skeleton sx={sx.textField} variant='rectangular' />
        </Grid>
        <Grid item xs={12}>
          <Skeleton sx={sx.textField} variant='rectangular' />
        </Grid>
        <Grid item xs={12}>
          <Skeleton sx={sx.textArea} variant='rectangular' />
        </Grid>
      </Grid>
      <Skeleton sx={sx.submitButton} variant='rectangular' />
    </Box>
  );
};

export default ContactFallback;