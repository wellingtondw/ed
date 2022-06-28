import * as S from './styles';

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};

export const PaginationItem = ({ number, onPageChange, isCurrent }: PaginationItemProps) => {
  return (
    <S.PageNumber isCurrent={isCurrent} onClick={() => onPageChange(number)}>
      {number}
    </S.PageNumber>
  );
};
