import styled from 'styled-components';

const EmptyPlace = () => {
  return (
    <Wrap>
      <div>이미지</div>
      <p>아직 추가된 장소가 없습니다.</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default EmptyPlace;
