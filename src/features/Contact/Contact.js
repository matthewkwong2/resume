import { Container, Grid, makeStyles } from '@material-ui/core';

import ContactForm from './ContactForm';
import { HexagonSlice6 } from 'mdi-material-ui';
import PersonalInfo from './PersonalInfo';
import React from 'react';
import SectionHeader from 'components/SectionHeader';
import contact from 'constants/contact';
import nav from 'constants/nav';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <section id={nav.contact}>
      <Container>
        <SectionHeader
          title={contact.title}
          Icon={HexagonSlice6}
        />
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid item md={4} xs={12}>
            <PersonalInfo />
          </Grid>
          <Grid item md xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;