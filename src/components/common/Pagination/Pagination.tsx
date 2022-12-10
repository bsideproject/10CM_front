import React, { SetStateAction } from 'react';
import { ReactComponent as leftArrowSvg } from 'assets/img/leftArrowPagi.svg';
import { ReactComponent as rightArrowSvg } from 'assets/img/rightArrowPagi.svg';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { getPagination } from 'utils/paging';

interface IProps {
  curPage: number;
  totalPage: number;
  onChangePage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination: React.FC<IProps> = ({curPage, totalPage, onChangePage}) => {
  
  const pageInfos = getPagination({
    currentPage: curPage,
    pagePerView: 5,
    articlePerPage: 6,
    total: totalPage * 6,
  });

  const handleChangePage = (move: string) => {
    if(move === 'left' && pageInfos.first.movable) {
      onChangePage(curPage - 1);
    }
    if(move === 'right' && pageInfos.last.movable) {
      onChangePage(curPage + 1);
    }
    
  }
  
  console.log(pageInfos);
  // 예시
  return (
    <Wrap>
      <LeftArrowIcon onClick={() => handleChangePage('left')}/>
      {pageInfos.pages.map(num => (
        <PerPage key={num} clicked={num === curPage} onClick={() => onChangePage(num)}>{num}</PerPage>
      ))}  
      <RightArrowIcon onClick={() => handleChangePage('right')}/>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 16px;
`;

const ArrowButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

const LeftArrowIcon = styled(leftArrowSvg)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const RightArrowIcon = styled(rightArrowSvg)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const PerPage = styled.span<{ clicked?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({ clicked }) => (clicked ? colors.BLUE_BASE : colors.NEUTRAl_300)};
  cursor: pointer;
`;

export default Pagination;
