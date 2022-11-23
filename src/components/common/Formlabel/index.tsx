import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  required?: boolean;
  children: ReactNode;
  labelmargin?: string;
  labelWarpperMargin?: string;
}

const Formlabel: React.FC<Props> = ({
  label,
  children,
  required = false,
  labelmargin = '8px',
  labelWarpperMargin = '0',
}) => {
  return (
    <LabelWrap labelWarpperMargin={labelWarpperMargin}>
      <Label labelmargin={labelmargin}>
        <span>{label}</span>
        {required && <span>*</span>}
      </Label>
      {children}
    </LabelWrap>
  );
};
export default Formlabel;

const LabelWrap = styled.div<{ labelWarpperMargin: string }>`
  padding-top: 8px;
  margin: ${({ labelWarpperMargin }) => labelWarpperMargin};
`;

const Label = styled.div<{ labelmargin: string }>`
  ${fonts('text-sm-bold')};
  color: ${colors.NEUTRAl_900};
  margin-bottom: ${({ labelmargin }) => labelmargin};
`;
