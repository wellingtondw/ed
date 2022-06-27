import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} 0;

    > div {
      max-width: 600px;
    }
  `}
`;
