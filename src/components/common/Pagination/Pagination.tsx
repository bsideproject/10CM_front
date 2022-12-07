import React from 'react';
import { ReactComponent as leftArrowSvg } from 'assets/img/leftArrowPagi.svg';
import { ReactComponent as rightArrowSvg } from 'assets/img/rightArrowPagi.svg';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { getPagination } from 'utils/paging';

interface IProps {}
const Pagination: React.FC<IProps> = () => {
  console.log(
    getPagination({
      currentPage: 6,
      pagePerView: 5,
      articlePerPage: 6,
      total: 60,
    }),
  );
  // 예시

  return (
    <Wrap>
      <LeftArrowIcon />
      <PerPage clicked>1</PerPage>
      <PerPage>2</PerPage>
      <PerPage>3</PerPage>
      <PerPage>4</PerPage>
      <PerPage>5</PerPage>
      <RightArrowIcon />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
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
