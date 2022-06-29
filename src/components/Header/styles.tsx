import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} 0;
    width: 100%;
    position: relative;

    > div,
    ul {
      max-width: 600px;
    }
  `}
`;

export const SearchWrapper = styled.div`
  margin: 0 auto;
`;

const searchResultsModifiers = {
  isOpen: css`
    opacity: 1;
    pointer-events: all;
  `,
  isLoading: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  notFound: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }
  `
};

type SearchResultsProps = {
  isOpen: boolean;
  isLoading: boolean;
  notFound: boolean;
};

export const SearchResults = styled.ul<SearchResultsProps>`
  ${({ theme, isOpen, isLoading, notFound }) => css`
    width: 100%;
    height: 355px;
    background-color: ${theme.colors.white};
    overflow-y: auto;
    z-index: ${theme.layers.menu};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: ${theme.spacings.xxsmall};
    box-shadow: 0px 4px 13px 2px rgba(0, 0, 0, 0.33);
    border-radius: ${theme.border.radius};
    opacity: 0;
    pointer-events: none;

    > a {
      border: none;
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.lightGrey};
      padding: ${theme.spacings.xsmall};
      width: 100%;
      text-align: left;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      outline: none;
      cursor: pointer;
      font-weight: ${theme.font.bold};
      transition: background-color ${theme.transition.fast};
      display: flex;
      align-items: center;

      > span {
        margin-left: ${theme.spacings.xxsmall};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80%;
      }

      > svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        background-color: ${darken(0.03, theme.colors.white)};
      }
    }

    ${isOpen && searchResultsModifiers.isOpen}
    ${isLoading && searchResultsModifiers.isLoading}
    ${notFound && searchResultsModifiers.notFound(theme)}
  `}
`;
