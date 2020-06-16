import React, { Fragment } from 'react';

import About from './About';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import ScrollToTopFab from './ScrollToTopFab';
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
    <ScrollToTopFab />
  </Fragment>
);

export default App;