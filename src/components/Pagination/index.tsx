import { PaginationItem } from './PaginationItem';

import * as S from './styles';

type PaginationProps = {
  totalCount: number;
  registerPerPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 2;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0);
};

export const Pagination = ({
  totalCount,
  currentPage = 1,
  registerPerPage,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCount / registerPerPage);
  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];

  return (
    <S.Wrapper>
      <S.PaginationItemWrapper>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <S.Etc>. . .</S.Etc>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />;
          })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <S.Etc>. . .</S.Etc>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </S.PaginationItemWrapper>
    </S.Wrapper>
  );
};
