import SearchCard from 'components/SearchCard';
import { KakaoAddress } from 'dtos/kakao';
import React from 'react';
import styled from 'styled-components';
import { AddrT } from 'types/dtos/address';
interface IProps {
  addrList: AddrT[];
  onSetDaysData: (addr: AddrT, dayNum: number) => void;
  onClickCard: (addressInfo: KakaoAddress) => void;
}
const SearchCardGroup: React.FC<IProps> = ({
  addrList,
  onSetDaysData,
  onClickCard,
}) => {
  return (
    <Wrap>
      {addrList.map(data => (
        <SearchCard
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
