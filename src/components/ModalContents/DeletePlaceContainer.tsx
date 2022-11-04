import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  headerText: string;
}
const DeletePlaceContainer: React.FC<IProps> = ({ headerText }) => {
  return (
    <Wrap>
      <Header>{headerText}</Header>
      <DeleteText>props로 정보 받아오는 곳</DeleteText>
      <NoticeText>을 정말로 삭제하시겠습니까?</NoticeText>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  color: ${colors.NEUTRAl_900};
  ${fonts('title-md-bold')};
  letter-spacing: 0.013em;
`;

const DeleteText = styled.span`
  color: ${colors.BLUE_BASE};
  ${fonts('text-sm-regular')};
`;

const NoticeText = styled.span`
  color: ${colors.NEUTRAl_600};
  ${fonts('text-sm-regular')};
`;

export default DeletePlaceContainer;
