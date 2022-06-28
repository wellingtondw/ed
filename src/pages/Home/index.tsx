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
      data: { popularMovies },
      loading
    }
  } = useGlobalState();

  useEffect(() => {
    popularMoviesRequest(1);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <MovieCardList loading={loading} items={formatMoviesList({ items: popularMovies })} />

        <Pagination
          totalCount={681893}
          registerPerPage={20}
          currentPage={5}
          onPageChange={() => console.log('Ok')}
        />
      </Container>
    </>
  );
};
