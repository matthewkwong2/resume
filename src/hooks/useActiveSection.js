import { useEffect, useState } from 'react';

import nav from 'constants/nav';

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

    const sections = Object.keys(nav).map(key => nav[key]).reverse();

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;