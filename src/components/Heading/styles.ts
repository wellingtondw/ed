import styled, { css } from 'styled-components';

import { HeadingProps } from '.';

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${theme.font.sizes.huge};
  `}
`;
