import * as S from './styles';

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export const PaginationItem = ({ number, isCurrent }: PaginationItemProps) => {
  return <S.PageNumber isCurrent={isCurrent}>{number}</S.PageNumber>;
};
