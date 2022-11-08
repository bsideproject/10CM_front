import { css, FlattenSimpleInterpolation } from 'styled-components';
type ModalType = string;

const defaultStyle = css`
  width: 480px;
`;

export const modalCss = (type: ModalType): FlattenSimpleInterpolation => {
  switch (type) {
    case 'ADD_UPDATE_PLACE':
      return css`
        ${defaultStyle};
        height: 650px;
        border-radius: 8px;
        padding: 24px;
        gap: 24px;
      `;
    case 'DELETE_PLACE':
      return css`
        ${defaultStyle};
        height: 216px;
        border-radius: 4px;
        padding: 24px;
        gap: 8px;
      `;
    case 'MY_PLACE':
      return css`
        ${defaultStyle};
        height: 717px;
        border-radius: 8px;
        padding: 32px 24px;
        gap: 8px;
      `;
    case 'MAKE_NEW_PLACE':
      return css`
        ${defaultStyle};
        height: 547px;
        width: 480px;
        padding: 32px 24px;
        gap: 8px;
      `;
    default:
      return css``;
  }
};
