import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieCardList } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { formatMoviesList } from '../../utils/movies';
import { Pagination } from '../../components/Pagination';

import { useActions } from '../../hooks/useActions';
import { useGlobalState } from '../../hooks/useGlobalState';

import * as S from './styles';

export const Home = () => {
  const { popularMoviesRequest } = useActions();
  const {
    movies: {
      popularMovies: { data, loading, totalCount, currentPage }
    }
  } = useGlobalState();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || currentPage;

  useEffect(() => {
    setSearchParams({ page: String(page) });

    popularMoviesRequest(page);
  }, []);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
    return popularMoviesRequest(page);
  };

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Heading>Filmes Populares</S.Heading>
          <MovieCardList loading={loading} items={formatMoviesList({ items: data })} />

          {!loading && (
            <S.PaginationWrapper>
              <Pagination
                totalCount={totalCount}
                registerPerPage={data.length}
                currentPage={page}
                onPageChange={(page) => handlePageChange(page)}
              />
            </S.PaginationWrapper>
          )}
        </S.Wrapper>
      </Container>
    </>
  );
};
