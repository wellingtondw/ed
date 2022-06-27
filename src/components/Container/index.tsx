import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;

    ${media.lessThan('large')`
      padding: 0 ${theme.spacings.xsmall};
    `}
  `}
`;
