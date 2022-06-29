import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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
      popularMovies: { data, loading, totalCount, currentPage }
    }
  } = useGlobalState();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setSearchParams({ page: String(currentPage) });

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
        <MovieCardList loading={loading} items={formatMoviesList({ items: data })} />

        {!loading && (
          <Pagination
            totalCount={totalCount}
            registerPerPage={data.length}
            currentPage={page}
            onPageChange={(page) => handlePageChange(page)}
          />
        )}
      </Container>
    </>
  );
};
