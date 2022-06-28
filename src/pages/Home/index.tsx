import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieCardList } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { formatMoviesList } from '../../utils/movies';
import { Pagination } from '../../components/Pagination';

import { IState } from '../../store';
import { popularMoviesRequest } from '../../store/modules/movies/actions';
import { IMoviesState } from '../../store/modules/movies/types';

export const Home = () => {
  const dispatch = useDispatch();
  const {
    data: {
      movies: { popularMovies }
    },
    loading
  } = useSelector<IState, IMoviesState>((state) => state.movies);

  useEffect(() => {
    const pageNumber = 1;
    dispatch(popularMoviesRequest(pageNumber));
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
