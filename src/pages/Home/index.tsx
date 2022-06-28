import { useEffect } from 'react';

import { MovieCardList } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { formatMoviesList } from '../../utils/movies';
import { Pagination } from '../../components/Pagination';

import { useActions } from '../../hooks/useActions';
import { useGlobalState } from '../../hooks/useGlobalState';

export const Home = () => {
  const { popularMoviesRequest } = useActions();
  const {
    movies: {
      popularMovies: { data, loading, currentPage, totalCount }
    }
  } = useGlobalState();

  useEffect(() => {
    popularMoviesRequest();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <MovieCardList loading={loading} items={formatMoviesList({ items: data })} />

        {!loading && (
          <Pagination
            totalCount={totalCount}
            registerPerPage={data.length}
            currentPage={currentPage}
            onPageChange={(page) => popularMoviesRequest(page)}
          />
        )}
      </Container>
    </>
  );
};
