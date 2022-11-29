import { getPlaceList } from 'apis/place';
import { MyPlaceResponse, Sort } from 'dtos/place';
import { useEffect, useState } from 'react';
import useDidmount from './useDidMount';

const PAGE_SIZE = 15;

const useMyPlaceList = () => {
  const { isDidMount } = useDidmount();
  const [isLoading, setIsLoading] = useState(false);
  const [currentSort, setCurrentSort] = useState<Sort>('createdDate,DESC');
  const [myPlaceList, setMyPlaceList] = useState<MyPlaceResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMyPlaceNextPage, setHasMyPlaceNextPage] = useState(false);

  const getHasNextPage = (count: number, page: number) => {
    if (count > page * PAGE_SIZE) {
      return true;
    }
    return false;
  };
  const reFetchMyPlaceList = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: (currentPage + 1) * PAGE_SIZE,
        page: 0,
        sort: currentSort,
      });
      setMyPlaceList(data.place_list);
      setCurrentPage(Math.floor(data.count / PAGE_SIZE));
      if (data.count > (currentPage + 1) * PAGE_SIZE) {
        setHasMyPlaceNextPage(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchNextMyPlaceList = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: PAGE_SIZE,
        page: currentPage + 1,
        sort: currentSort,
      });
      setMyPlaceList(prev => prev.concat(data.place_list));
      setHasMyPlaceNextPage(getHasNextPage(data.count, currentPage + 2));
      setCurrentPage(prev => prev + 1);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchMyPlaceList = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: PAGE_SIZE,
        page: currentPage,
        sort: currentSort,
      });
      setMyPlaceList(prev => prev.concat(data.place_list));
      setHasMyPlaceNextPage(getHasNextPage(data.count, currentPage + 1));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleChangeSort = (sortValue: Sort) => {
    setCurrentSort(sortValue);
  };
  // 첫 렌더링 시 초기 저장된 장소 목록
  useEffect(() => {
    (async () => {
      await fetchMyPlaceList();
    })();
  }, []);
  useEffect(() => {
    if (isDidMount) {
      (async () => {
        await reFetchMyPlaceList();
      })();
    }
  }, [currentSort]);

  return {
    myPlaceList,
    isMyListFetching: isLoading,
    handleChangeSort,
    reFetchMyPlaceList,
    hasMyPlaceNextPage,
    getMyPlaceListNextPage: fetchNextMyPlaceList,
    currentSort,
  };
};
export default useMyPlaceList;
