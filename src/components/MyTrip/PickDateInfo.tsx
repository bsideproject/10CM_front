import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { useAppSelect } from 'store/configureStore.hooks';
import * as Misc from 'services/misc';
interface IProps {
  pickedDay: number;
}
const PickDateInfo: React.FC<IProps> = ({ pickedDay }) => {
  const { fromDate } = useAppSelect(state => state.placeInfo);
  return (
    <Wrap>
      <PickDay>{`DAY${pickedDay}`}</PickDay>
      <PickDate>{Misc.convertPickDay(fromDate, pickedDay)}</PickDate>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid ${colors.NEUTRAl_100};
`;

const PickDay = styled.span`
  ${fonts('text-xs-bold')};
  color: ${colors.BLUE_BASE};
  letter-spacing: 0.013em;
`;

const PickDate = styled.span`
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;

export default PickDateInfo;
