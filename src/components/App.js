import React, { Fragment } from 'react';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';
import FunFact from './FunFact';
import Home from './Home';
import NavBar from './NavBar';
import ReloadBackdrop from './ReloadBackdrop';
import ScrollToTopFab from './ScrollToTopFab';
import SwSnackbar from './SwSnackbar';
import Testimonial from './Testimonial';
import Work from './Work';

const App = () => (
  <Fragment>
    <NavBar />
    <Home />
    <About />
    <FunFact />
    <Education />
    <Work />
    <Testimonial />
    <Contact />
    <Footer />
    <SwSnackbar />
    <ScrollToTopFab />
    <ReloadBackdrop />
  </Fragment>
);

export default App;