import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as SearchSvg } from 'assets/svg/input-search.svg';
import { ReactComponent as CancelSvg } from 'assets/svg/input-cancel.svg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  count?: boolean;
  onClear?: () => void;
  isClear?: boolean;
  isSearch?: boolean;
}

// 48
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    error = '',
    count = false,
    value = '',
    maxLength = 50,
    isSearch,
    isClear,
    onClear,
    ...rest
  } = props;

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const checkInputWrap = useCallback((e: MouseEvent) => {
    if (!wrapRef.current?.contains(e.target as Node)) {
      setIsFocus(false);
    }
  }, []);
  useEffect(() => {
    if (isFocus) {
      window.addEventListener('click', checkInputWrap);
    }
    return () => {
      window.removeEventListener('click', checkInputWrap);
    };
  }, [isFocus]);
  return (
    <div>
      <InputWrap ref={wrapRef}>
        {isSearch && <SearchIcon />}
        <MyInput
          ref={ref}
          value={value}
          {...rest}
          error={!!error}
          maxLength={maxLength}
          isSearch={!!isSearch}
          isClear={!!isClear}
          onFocus={handleFocus}
        />
        {isClear && isFocus && <CancelIcon onClick={onClear} />}
      </InputWrap>
      {(!!error || count) && (
        <OptionsWrap error={!!error}>
          <div>{error}</div>
          {count && (
            <div>
              {value.toString().length} / {maxLength}
            </div>
          )}
        </OptionsWrap>
      )}
    </div>
  );
});
export default Input;

const InputWrap = styled.div`
  position: relative;
`;

const defaultInputStyle = css`
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 4px;
  box-sizing: border-box;
  ${fonts('text-xs-regular')};
  &::placeholder {
    color: ${colors.NEUTRAl_300};
  }
  transition: 0.1s linear;
`;
const getInputBackground = (disabled?: boolean) => {
  if (disabled) {
    return css`
      background-color: ${colors.NEUTRAl_100};
    `;
  }
  return css`
    background-color: ${colors.WHITE};
  `;
};
const getInputBorder = (error: boolean) => {
  if (error) {
    return css`
      border: 1px solid ${colors.ALERT};
    `;
  }
  return css`
    border: 1px solid ${colors.NEUTRAl_200};
    &:focus {
      border: 1px solid ${colors.BLUE_BASE};
    }
  `;
};
const getInputPadding = (isClear: boolean, isSearch: boolean) => {
  let left = 12;
  let right = 12;
  if (isClear) {
    right = 48;
  }
  if (isSearch) {
    left = 48;
  }
  return css`
    padding: 0px ${right}px 0px ${left}px;
  `;
};
// input 스타일
const MyInput = styled.input<{
  error: boolean;
  isClear: boolean;
  isSearch: boolean;
}>`
  ${defaultInputStyle};
  ${({ isClear, isSearch }) => getInputPadding(isClear, isSearch)};
  height: 44px;
  ${({ disabled }) => getInputBackground(disabled)}
  ${({ error }) => getInputBorder(error)};
`;
const OptionsWrap = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  padding: 0 12px;
  ${fonts('caption')}
  ${({ error }) =>
    error
      ? css`
          color: ${colors.ALERT};
        `
      : css`
          ${colors.NEUTRAl_400}
        `}
`;
const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  stroke: ${colors.BLUE_BASE};
`;
const CancelIcon = styled(CancelSvg)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
