import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;
