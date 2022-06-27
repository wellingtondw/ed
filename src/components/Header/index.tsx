import { Search } from '@styled-icons/material';

import { Input } from '../Input';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Input placeholder="Buscar" icon={<Search />} iconPosition="right" />
      </S.Container>
    </S.Wrapper>
  );
};
