import { getPlaceList } from 'apis/place';
import { MyPlaceResponse, Sort } from 'dtos/place';
import { useEffect, useState } from 'react';
import useDidmount from './useDidMount';

const PAGE_SIZE = 8;

const useMyPlaceList = () => {
  const { isDidMount } = useDidmount();

  const [isLoading, setIsLoading] = useState(false);
  const [currentSort, setCurrentSort] = useState<Sort>('createdDate,DESC');
  const [myPlaceList, setMyPlaceList] = useState<MyPlaceResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [totalCount, setTotalCount] = useState(0);
  const [hasMyPlaceNextPage, setHasMyPlaceNextPage] = useState(false);

  const getHasNextPage = (count: number, page: number) => {
    if (count > page * PAGE_SIZE) {
      return true;
    }
    return false;
  };
  const getCurrentPage = (totalPage: number) => {
    if (totalPage % PAGE_SIZE === 0) {
      return totalPage / PAGE_SIZE;
    }
    return Math.floor(totalPage / PAGE_SIZE) + 1;
  };
  const reFetchMyPlaceList = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: myPlaceList.length,
        page: 0,
        sort: currentSort,
      });
      setCurrentPage(() => getCurrentPage(myPlaceList.length));
      setMyPlaceList(data.place_list);
      // setTotalCount(data.count);
      if (data.count > getCurrentPage(data.count) * PAGE_SIZE) {
        setHasMyPlaceNextPage(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchMyPlaces = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: PAGE_SIZE,
        page: currentPage,
        sort: currentSort,
      });
      setMyPlaceList(prev => prev.concat(data.place_list));
      // setTotalCount(data.count);
      setHasMyPlaceNextPage(getHasNextPage(data.count, currentPage + 1));
      setCurrentPage(prev => prev + 1);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchNextMyPlaces = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        size: PAGE_SIZE,
        page: currentPage,
        sort: currentSort,
      });
      setMyPlaceList(prev => prev.concat(data.place_list));
      // setTotalCount(data.count);
      setHasMyPlaceNextPage(getHasNextPage(data.count, currentPage + 1));
      setCurrentPage(prev => prev + 1);
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
      await fetchMyPlaces();
    })();
  }, []);
  useEffect(() => {
    console.log(isDidMount);
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
    getMyPlaceListNextPage: fetchNextMyPlaces,
    currentSort,
  };
};
export default useMyPlaceList;
