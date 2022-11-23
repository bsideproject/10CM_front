import EmptyPlace from "components/SearchPlace/EmptyPlace";
import styled from "styled-components";

const PlaceCardContent = () => {
  return (
    <Wrap>
      <EmptyPlace />
    </Wrap>
  );
};

const Wrap = styled.div``;

export default PlaceCardContent;
