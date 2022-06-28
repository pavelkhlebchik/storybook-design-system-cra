import styled from '@emotion/styled';
import { InputLabelProps } from './Label';
import { css } from '@emotion/react';

export const StyledLabel = styled.label`
  position: absolute;
  left: 16px;
  top: 8px;
  color: ${({ theme, active }) =>
    active
      ? theme.colors.secondaryGray
      : theme.colors.site.primary.dark};
  font-size: 12px;
  z-index: 2;
  ${({ focused, theme }) =>
    focused &&
    css`
      color: ${theme.colors.site.primary.main};
    `}
  opacity: ${({ disabled, active }) =>
    disabled && !active ? '0.3' : null}
`;
