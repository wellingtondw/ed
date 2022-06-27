import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
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
    max-width: 250px;
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
