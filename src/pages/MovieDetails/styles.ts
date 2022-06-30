import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Heading } from '../../components/Heading';
import { Link as LinkRDOM } from 'react-router-dom';
import { darken } from 'polished';

export const Link = styled(LinkRDOM)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: block;
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transition.fast};
    font-size: ${theme.font.sizes.xlarge};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 120px);
    padding: ${theme.spacings.xsmall} 0;
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: ${theme.spacings.xsmall};
    }

    ${media.lessThan('large')`
      padding: ${theme.spacings.small} 0;

      > div {
        flex-direction: column;
      }
    `}
  `}
`;

export const Loading = styled.div`
  width: 100%;
  min-width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  ${({ theme }) => css`
    img {
      width: 400px;
      border-radius: ${theme.border.radius};
    }

    ${media.lessThan('large')`
      img {
        width: 240px; 
        margin-bottom: ${theme.spacings.xsmall};
      }
    `}
  `}
`;

export const Right = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
    width: 100%;
    max-width: 700px;
  `}
`;

export const Title = styled(Heading)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};
  `}
`;

export const Genres = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Genre = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.grey};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const Rating = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.grey};
    display: flex;
    align-items: center;

    > span {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.grey};
    font-weight: ${theme.font.bold};
  `}
`;

export const Overview = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xxlarge};
    color: ${theme.colors.black};

    ${media.lessThan('large')`
      margin-bottom: ${theme.spacings.medium};
    `}
  `}
`;

export const Producers = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
  `}
`;
