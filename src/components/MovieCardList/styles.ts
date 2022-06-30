import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Wrapper as MovieCardWrapper, SkeletonWrapper } from '../MovieCard/styles';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Item = styled.li`
  width: calc(20% - 16px);
  list-style: none;

  ${MovieCardWrapper} {
    max-width: 100%;
  }

  ${SkeletonWrapper} {
    padding-bottom: 170%;
  }

  ${media.lessThan('large')`
      width: calc(25% - 16px);
    `}

  ${media.lessThan('medium')`
      width: calc(33.3% - 16px);  
    `}

    ${media.lessThan('small')`
      width: calc(50% - 16px); 
    `}
`;
