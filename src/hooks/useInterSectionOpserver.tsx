import { useEffect, useRef } from 'react';

type UseInterSectionObserver = (callback: IntersectionObserverCallback) => {
  ref: React.MutableRefObject<any>;
};

const useInterSectionObserver: UseInterSectionObserver = callback => {
  const ref = useRef();
  const observerRef = useRef<IntersectionObserver>(
    new IntersectionObserver(callback),
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback);
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }
    return () => {
      observerRef.current.disconnect();
    };
  }, [ref, callback]);

  return { ref };
};
export default useInterSectionObserver;
