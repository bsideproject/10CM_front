import styled from 'styled-components';

import * as CFG from 'services/config.js';

const FilterBox = () => {
  return (
    <Wrap>
      <span>{CFG.FILTERBOX_TEXT}</span>
      <span>select 위치</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 16px 12px 16px;
`;

export default FilterBox;
