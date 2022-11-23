import styled from 'styled-components';

export const MyPlaceCardWrap = styled.article`
  width: 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  & + & {
    margin-top: 16px;
  }
`;
export const MyPlaceCardImageWrap = styled.div`
  position: relative;
  height: 183.25px;
  overflow: hidden;
`;
export const MyPlaceInfoWrap = styled.div`
  position: relative;
  padding: 12px;
`;
