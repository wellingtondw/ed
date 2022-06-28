import { MovieCardList } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import movieCardListMock from '../../components/MovieCardList/mock';
import { Container } from '../../components/Container';
import { formatMoviesList } from '../../utils/movies';
import { Pagination } from '../../components/Pagination';

export const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <MovieCardList items={formatMoviesList({ items: movieCardListMock })} />

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
