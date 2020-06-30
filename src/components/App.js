import React, { Fragment } from 'react';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import ScrollToTopFab from './ScrollToTopFab';
import SwSnackbar from './SwSnackbar';
import Testimonial from './Testimonial';
import Work from './Work';

const App = () => (
  <Fragment>
    <NavBar />
    <Home />
    <About />
    <Education />
    <Work />
    <Testimonial />
    <Contact />
    <Footer />
    <SwSnackbar />
    <ScrollToTopFab />
  </Fragment>
);

export default App;