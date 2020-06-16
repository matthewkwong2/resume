import { useEffect, useState } from 'react';

import nav from 'constants/nav';
import { throttle } from 'lodash-es';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(nav.home);

  useEffect(() => {
    const isScrollToBottom = () =>
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    const isSectionActive = section =>
      section
      && section.offsetTop <
      document.documentElement.scrollTop
      + document.documentElement.clientHeight / 8;

    const sections = Object.values(nav).reverse();

    const handleScroll = () => {
      let active = nav.home;
      if (isScrollToBottom()) {
        setActiveSection(nav.contact);
      } else {
        for (let sectionId of sections) {
          const section = document.getElementById(sectionId);

          if (isSectionActive(section)) {
            active = sectionId;
            break;
          }
        }
        setActiveSection(active);
      }
    };

    const handleThrottledScroll = throttle(handleScroll, 166);
    window.addEventListener('scroll', handleThrottledScroll);
    return () => {
      window.removeEventListener('scroll', handleThrottledScroll);
      handleThrottledScroll.cancel();
    };
  }, []);

  return activeSection;
};

export default useActiveSection;