import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children, ...props }: HeadingProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);
