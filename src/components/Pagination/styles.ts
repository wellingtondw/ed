import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Etc = styled.span`
  ${({ theme }) => css`
    width: 20px;
    margin: 0 ${theme.spacings.xsmall};
    text-align: center;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`;

type PageNumberProps = {
  isCurrent?: boolean;
};

const pageNumberWrappers = {
  isCurrent: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${darken(0.05, theme.colors.primary)};
    }
  `
};

export const PageNumber = styled.button<PageNumberProps>`
  ${({ theme, isCurrent }) => css`
    cursor: pointer;
    background-color: ${theme.colors.lightGrey};
    border: none;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    transition: background-color ${theme.transition.fast};

    & + button {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      background-color: ${darken(0.05, theme.colors.lightGrey)};
    }

    ${isCurrent && pageNumberWrappers.isCurrent(theme)}
  `}
`;
