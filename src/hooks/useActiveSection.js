import { useEffect, useState } from 'react';

import nav from 'constants/nav';
import { throttle } from 'lodash-es';

const isScrollToBottom = () =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight;

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(nav.home);

  useEffect(() => {
    const sections = Object.values(nav);
    const handleScroll = () => {
      let active = nav.home;
      if (isScrollToBottom()) {
        setActiveSection(nav.contact);
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const section = document.getElementById(sectionId);

          if (
            section
            && section.offsetTop <
            document.documentElement.scrollTop
            + document.documentElement.clientHeight / 8
          ) {
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