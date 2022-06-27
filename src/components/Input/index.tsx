import { useState, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type InputProps = {
  onInputChange?: (value: string) => void;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  icon,
  iconPosition = 'left',
  name,
  initialValue = '',
  disabled = false,
  onInputChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper disabled={disabled}>
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};
