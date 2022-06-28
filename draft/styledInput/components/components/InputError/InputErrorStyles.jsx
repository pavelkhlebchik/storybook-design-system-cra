import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledInputError = styled.div`
  ${({ theme }) => css`
    margin-top: 2px;
    margin-bottom: ${theme.space[2]};
    min-height: 14px;
    margin-left: ${theme.space[3]}px;
    color: ${theme.colors.site.danger.main};
    font-size: ${theme.fontSizes[2]}px;
  `}
`;
