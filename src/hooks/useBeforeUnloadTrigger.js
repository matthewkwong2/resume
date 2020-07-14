import { useEffect, useState } from 'react';

const useBeforeUnloadTrigger = () => {
  const [beforeUnload, setBeforeUnload] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setBeforeUnload(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload, { passive: true });
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return beforeUnload;
};

export default useBeforeUnloadTrigger;