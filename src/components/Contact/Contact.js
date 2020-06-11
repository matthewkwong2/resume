import { Container, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';

import ContactForm from './ContactForm';
import { HexagonSlice6 } from 'mdi-material-ui'
import PersonalInfo from './PersonalInfo';
import SectionHeader from 'components/SectionHeader';
import contact from 'constants/contact';
import nav from 'constants/nav';
import { updateCurrentSection } from 'actions'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Contact = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView({ threshold: xsDown ? 0.1 : 0.5 });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(updateCurrentSection(nav.contact.id));
    }
  }, [dispatch, inView]);

  return (
    <section id={nav.contact.id}>
      <Container ref={ref}>
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