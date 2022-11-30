import SearchCard from 'components/SearchCard';
import { KakaoAddress } from 'dtos/kakao';
import React from 'react';
import styled from 'styled-components';
interface IProps {
  addrList: KakaoAddress[];
  pickedDay: number;
  onSetDaysData: (addr: KakaoAddress, dayNum: number) => void;
  onClickCard: (addressInfo: KakaoAddress) => void;
}
const SearchCardGroup: React.FC<IProps> = ({
  addrList,
  pickedDay,
  onSetDaysData,
  onClickCard,
}) => {
  return (
    <Wrap>
      {addrList.map(data => (
        <SearchCard
          key={data.id}
          pickedDay={pickedDay}
          data={data}
          onSetDaysData={onSetDaysData}
          onClickCard={onClickCard}
        />
      ))}
    </Wrap>
  );
};
// TODO: KakaoAddress <<
const Wrap = styled.div`
  height: calc(100vh - 216px);
  overflow-y: scroll;
`;

export default SearchCardGroup;
