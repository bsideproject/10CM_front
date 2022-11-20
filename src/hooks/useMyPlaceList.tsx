import { getPlaceList } from 'apis/place';
import { MyPlaceResponse } from 'dtos/place';
import { useEffect, useState } from 'react';

const PAGE_SIZE = 8;

const useMyPlaceList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState(false);
  const [myPlaceList, setMyPlaceList] = useState<MyPlaceResponse[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMyPlaceNextPage, setHasMyPlaceNextPage] = useState(false);

  const getHasNextPage = (count: number, page: number) => {
    if (count > page * PAGE_SIZE) {
      return true;
    }
    return false;
  };

  const handleChangeSort = () => {
    setSort(() => !sort);
  };
  const reFetchMyPlaceList = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({ size: totalCount });
      setPage(() => {
        if (data.count % PAGE_SIZE === 0) {
          return data.count % PAGE_SIZE;
        }
        return (data.count % PAGE_SIZE) + 1;
      });
      setMyPlaceList(data.place_list);
      setTotalCount(data.count);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchMyPlaces = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({ size: PAGE_SIZE, page });
      setMyPlaceList(data.place_list);
      setTotalCount(data.count);
      setPage(prev => prev + 1);
      setHasMyPlaceNextPage(getHasNextPage(data.count, page));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  // 첫 렌더링 시 초기 저장된 장소 목록
  useEffect(() => {
    fetchMyPlaces();
  }, []);

  return {
    myPlaceList,
    isMyListFetching: isLoading,
    handleChangeSort,
    reFetchMyPlaceList,
    hasMyPlaceNextPage,
  };
};
export default useMyPlaceList;
