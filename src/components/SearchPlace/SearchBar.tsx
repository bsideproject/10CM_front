import styled from 'styled-components';

import Input from 'components/common/Input';

const SearchBar = () => {
  return (
    <Wrap>
      <Input />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 40px 20px 12px 20px;
  width: 390px;
`;

export default SearchBar;
