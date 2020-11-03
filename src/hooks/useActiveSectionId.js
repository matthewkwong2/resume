import { useEffect, useState } from 'react';

import nav from 'constants/nav';

const useActiveSectionId = () => {
  const [activeSection, setActiveSection] = useState(nav.home);

  const isScrollToBottom = () =>
    window.innerHeight + window.scrollY >= document.body.offsetHeight;
  const isSectionActive = section => section
    && section.offsetTop < document.documentElement.scrollTop
    + document.documentElement.clientHeight / 8;

  useEffect(() => {
    const sections = Object.values(nav).reverse();

    const handleScroll = () => {
      let active = nav.home;
      if (isScrollToBottom()) {
        setActiveSection(sections[0]);
      } else {
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);

          if (isSectionActive(section)) {
            active = sectionId;
            break;
          }
        }
        setActiveSection(active);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

export default useActiveSectionId;