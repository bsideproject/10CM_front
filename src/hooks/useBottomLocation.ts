import React, { useEffect, useRef, useState } from 'react';

const useBottomLocation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);
  const [fakeRender, setFakeRender] = useState(false);

  setTimeout(() => {
    setFakeRender(true);
  }, 1000);
  // 렌더링이 안되어 꼼수를 썼는데 더 좋은 방법 있는지 찾아보기
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
  }, [fakeRender]);

  return [ref, isBottom];
};

export default useBottomLocation;
