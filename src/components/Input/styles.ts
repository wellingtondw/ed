import styled, { css, DefaultTheme } from 'styled-components';

import { InputProps } from '.';

type IconPositionProps = Pick<InputProps, 'iconPosition'>;

type WrapperProps = Pick<InputProps, 'disabled'>;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: none;
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
    
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small};
        ${theme.colors.white} inset;
      filter: none;

      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.grey};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`;

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background-color: ${theme.colors.lightGrey};
    }

    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.grey};

      &::placeholder {
        color: currentColor;
      }
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;
