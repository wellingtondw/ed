import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import media from 'styled-media-query';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 250px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    background-color: ${theme.colors.white};
    display: block;
    text-decoration: none;

    &:hover {
      img {
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }

    ${media.lessThan('medium')`
      max-width: 180px;
    `}
  `}
`;

export const PosterWrapper = styled.div`
  overflow: hidden;
  display: flex;
`;

export const Poster = styled.img`
  ${({ theme }) => css`
    transition: transform ${theme.transition.default};
    width: 100%;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

export const Year = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: 2px 4px;
    color: ${theme.colors.white};

    svg {
      width: ${theme.font.sizes.xsmall};
      height: ${theme.font.sizes.xsmall};
      margin-right: 2px;
    }

    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

const skeletonLoading = (theme: DefaultTheme) => keyframes`
  0% {
    background-color: ${theme.colors.lightGrey};
  }
  100% {
    background-color: ${lighten(0.7, theme.colors.grey)};
  }
`;

export const SkeletonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 250px;
    padding-bottom: 340px;
    position: relative;
    border: 1px solid ${theme.colors.lightGrey};


    > div:nth-child(1) {
      width: 100%;
      height: 85%;
      background-color: ${theme.colors.lightGrey};
      animation: ${skeletonLoading(theme)} 1s linear infinite alternate;
      position: absolute;
      top: 0;
    }

    > div:nth-child(2) {
      width: 100%;
      padding: ${theme.spacings.xxsmall};
      position: absolute;
      bottom: 0;

        div:nth-child(1) {
          width: 100%;
          height: ${theme.spacings.xxsmall};
          background-color: ${theme.colors.lightGrey};
          margin-top: ${theme.spacings.xxsmall};
          border-radius: ${theme.border.radius};
          animation: ${skeletonLoading(theme)} 1s linear infinite alternate;
        }

        div:nth-child(2) {
          width: 100%;
          margin-top: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          > div:nth-child(1)  {
            width: 30px;
            height: 10px;
            background-color: ${theme.colors.lightGrey};
            border-radius: ${theme.border.radius};
            animation: ${skeletonLoading(theme)} 1s linear infinite alternate;
          }  

          > div:nth-child(2)  {
            width: 40px;
            height: ${theme.spacings.xsmall};
            background-color: ${theme.colors.lightGrey};
            border-radius: ${theme.border.radius};
            animation: ${skeletonLoading(theme)} 1s linear infinite alternate;
          }  
        }
      }
    }

    ${media.lessThan('medium')`
      max-width: 180px;

      > div:nth-child(1) {
        height: 80%;     
      }
    `}
  `}
`;
