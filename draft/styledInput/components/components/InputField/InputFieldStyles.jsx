import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledInputField = styled.input`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.site.primary.dark};
  transition: border 0.1s ease, margin-bottom 0.1s ease;
  height: 48px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: 21px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.site.primary.main};
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryGray};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }
  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.colors.site.danger.main};
    `}
  ${({ disabled, theme }) =>
    disabled &&
    css`
      pointer-events: none;
      border-color: ${theme.colors.lightGray};
      background-color: ${theme.colors.backgroundGray};
    `}
`;
