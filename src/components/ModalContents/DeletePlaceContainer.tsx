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
      <DeleteText>‘삭제할장소인데정말로긴이이이이이이인이름’</DeleteText>
      <NoticeText>을 정말로 삭제하시겠습니까?</NoticeText>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.span`
  color: ${colors.NEUTRAl_900};
  ${fonts('title-md-bold')};
  letter-spacing: 0.013em;
`;

const DeleteText = styled.span`
  color: ${colors.BLUE_BASE};
  margin-top: 8px;
  ${fonts('text-sm-regular')};
`;

const NoticeText = styled.span`
  color: ${colors.NEUTRAl_600};
  ${fonts('text-sm-regular')};
  letter-spacing: 0.013em;
  padding-bottom: 16px;
`;

export default DeletePlaceContainer;
