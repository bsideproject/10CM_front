import { css, FlattenSimpleInterpolation } from 'styled-components';

type Size =
  | 'title-md'
  | 'title-md-bold'
  | 'title-lg'
  | 'title-lg-bold'
  | 'title-2xl'
  | 'title-3xl'
  | 'title-4xl'
  | 'caption'
  | 'text-xs-regular'
  | 'text-xxs-regular'
  | 'text-xs'
  | 'text-xs-bold'
  | 'text-sm-regular'
  | 'text-sm'
  | 'text-sm-bold'
  | 'text-ms-medium'
  | 'text-ms-bold';
export const fonts = (size: Size): FlattenSimpleInterpolation => {
  switch (size) {
    case 'title-md':
      return css`
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
      `;
    case 'title-md-bold':
      return css`
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
      `;
    case 'title-lg':
      return css`
        font-weight: 500;
        font-size: 24px;
        line-height: 38px;
      `;
    case 'title-lg-bold':
      return css`
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
      `;
    case 'title-2xl':
      return css`
        font-weight: 700;
        font-size: 36px;
        line-height: 58px;
      `;
    case 'title-3xl':
      return css`
        font-weight: 700;
        font-size: 48px;
        line-height: 76px;
      `;
    case 'title-4xl':
      return css`
        font-weight: 700;
        font-size: 60px;
        line-height: 84px;
      `;
    case 'caption':
      return css`
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
      `;
    case 'text-xxs-regular':
      return css`
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
      `;
    case 'text-xs-regular':
      return css`
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
      `;
    case 'text-xs':
      return css`
        font-weight: 500;
        font-size: 15px;
        line-height: 26px;
      `;
    case 'text-xs-bold':
      return css`
        font-weight: 700;
        font-size: 15px;
        line-height: 26px;
      `;
    case 'text-sm-regular':
      return css`
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      `;
    case 'text-sm':
      return css`
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      `;
    case 'text-sm-bold':
      return css`
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
      `;
    case 'text-ms-medium':
      return css`
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
      `;
    case 'text-ms-bold':
      return css`
        font-weight: 700;
        font-size: 18px;
        line-height: 32px;
      `;
    default:
      return css`
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      `;
  }
};
