import { MovieCardList } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import movieCardListMock from '../../components/MovieCardList/mock';
import { Container } from '../../components/Container';
import { formatMoviesList } from '../../utils/movies';

export const Home = () => {
  return (
    <>
      <Header />

      <Container style={{ display: 'flex ' }}>
        <MovieCardList items={formatMoviesList({ items: movieCardListMock })} />
      </Container>
    </>
  );
};
