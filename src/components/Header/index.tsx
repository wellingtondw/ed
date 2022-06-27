import { Search } from '@styled-icons/material';
import { Container } from '../Container';

import { Input } from '../Input';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <Input placeholder="Buscar" icon={<Search />} iconPosition="right" />
      </Container>
    </S.Wrapper>
  );
};
