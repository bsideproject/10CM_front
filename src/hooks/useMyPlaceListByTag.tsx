import { getPlaceList } from 'apis/place';
import { MyPlaceResponse } from 'dtos/place';
import { useEffect, useState } from 'react';
const PAGE_SIZE = 15;

const useMyPlaceListByTag = (tagName: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [myPlaceListByTag, setMyPlaceListByTag] = useState<MyPlaceResponse[]>(
    [],
  );
  console.log(myPlaceListByTag);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMyPlaceListByTagNextPage, setHasMyPlaceListByTagNextPage] =
    useState(false);

  const getHasNextPage = (count: number, page: number) => {
    if (count > page * PAGE_SIZE) {
      return true;
    }
    return false;
  };
  const reFetchMyPlaceListByTag = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        ...(tagName && { tag: tagName }),
        size: (currentPage + 1) * PAGE_SIZE,
        page: 0,
        sort: 'createdDate,DESC',
      });
      setMyPlaceListByTag(data.place_list);
      setCurrentPage(Math.floor(data.count / PAGE_SIZE));
      if (data.count > (currentPage + 1) * PAGE_SIZE) {
        setHasMyPlaceListByTagNextPage(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchNextMyPlaceListByTag = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        ...(tagName && { tag: tagName }),
        size: PAGE_SIZE,
        page: currentPage + 1,
        sort: 'createdDate,DESC',
      });
      setMyPlaceListByTag(prev => prev.concat(data.place_list));
      setHasMyPlaceListByTagNextPage(
        getHasNextPage(data.count, currentPage + 2),
      );
      setCurrentPage(prev => prev + 1);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  const fetchMyPlaceListByTag = async () => {
    setIsLoading(true);
    try {
      const data = await getPlaceList({
        ...(tagName && { tag: tagName }),
        size: PAGE_SIZE,
        page: 0,
        sort: 'createdDate,DESC',
      });
      setMyPlaceListByTag(data.place_list);
      setHasMyPlaceListByTagNextPage(getHasNextPage(data.count, 1));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  // 첫 렌더링 시 초기 저장된 장소 목록
  useEffect(() => {
    if (tagName) {
      (async () => {
        await fetchMyPlaceListByTag();
      })();
    }
  }, [tagName]);

  return {
    myPlaceListByTag,
    isMyPlaceListByTagFetching: isLoading,
    reFetchMyPlaceListByTag,
    hasMyPlaceListByTagNextPage,
    getMyPlaceListByTagNextPage: fetchNextMyPlaceListByTag,
  };
};
export default useMyPlaceListByTag;
