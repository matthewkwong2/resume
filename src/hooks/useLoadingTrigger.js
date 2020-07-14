import { useEffect, useState } from 'react';

const useLoadingTrigger = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setLoading(true);
    };

    const handleDOMContentLoaded = () => {
      setLoading(false);
    };


    window.addEventListener(
      'beforeunload',
      handleBeforeUnload,
      { passive: true }
    );
    window.addEventListener(
      'DOMContentLoaded',
      handleDOMContentLoaded,
      { passive: true }
    );
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  return loading;
};

export default useLoadingTrigger;