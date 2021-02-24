import { Box, Container, Grid } from '@material-ui/core';
import { Suspense, lazy } from 'react';

import ContactContentFallback from './ContactContentFallback';
import { HexagonSlice6 } from 'mdi-material-ui';
import SectionHeader from 'components/SectionHeader';
import constants from 'constants/app';
import nav from 'constants/nav';
import useSx from './useContactSx';

const ContactForm = lazy(() => import('./ContactForm'));
const PersonalInfo = lazy(() => import('./PersonalInfo'));

const Contact = () => {
  const sx = useSx();

  return (
    <Container component='section' id={nav.contact.id}>
      <SectionHeader
        heading={constants.getInTouch}
        Icon={HexagonSlice6}
      />
      <Box sx={sx.gridContainer}>
        <Suspense fallback={<ContactContentFallback />}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <PersonalInfo />
            </Grid>
            <Grid item md xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Suspense>
      </Box>
    </Container>
  );
};

export default Contact;