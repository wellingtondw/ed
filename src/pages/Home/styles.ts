import styled, { css } from 'styled-components';

import { Heading as Head } from '../../components/Heading';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0 ${theme.spacings.large};
  `}
`;

export const Heading = styled(Head)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;
