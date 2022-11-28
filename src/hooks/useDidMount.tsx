import { useEffect, useRef } from 'react';

const useDidmount = () => {
  const isDidMount = useRef(false);

  useEffect(() => {
    isDidMount.current = true;
  }, []);

  return { isDidMount: isDidMount.current };
};
export default useDidmount;
