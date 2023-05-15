import React, { useEffect, useRef, useState } from 'react';

const useBottomLocation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const handleScroll = () => {
      if (currentRef) {
        const { scrollTop, clientHeight, scrollHeight } = currentRef;

        if (scrollTop + clientHeight + 10 > scrollHeight) {
          setIsBottom(true);
          return;
        }
        setIsBottom(false);
      }
    };

    currentRef?.addEventListener('scroll', handleScroll);

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [ref, isBottom];
};

export default useBottomLocation;
