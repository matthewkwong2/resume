import About from 'features/About';
import Contact from 'features/Contact';
import Education from 'features/Education';
import Footer from 'components/Footer';
import FunFact from 'features/FunFact';
import Home from 'features/Home';
import NavBar from 'components/NavBar';
import Project from 'features/Project';
import ScrollToTopFab from 'components/ScrollToTopFab';
import SwSnackbar from 'components/SwSnackbar';
import Testimonial from 'features/Testimonial';
import Work from 'features/Work';
import routes from 'constants/routes';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => document.title = routes.main.title, []);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <FunFact />
      <Education />
      <Work />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
      <SwSnackbar />
      <ScrollToTopFab />
    </>
  );
};

export default Main;