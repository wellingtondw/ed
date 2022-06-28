import { MovieCardList, MovieCardListDTO } from '../../components/MovieCardList';
import { Header } from '../../components/Header';
import movieCardListMock from '../../components/MovieCardList/mock';
import { Container } from '../../components/Container';

export const Home = () => {
  const transformItems = () => {
    return movieCardListMock.map((item): MovieCardListDTO => {
      const { poster_path, title, release_date, vote_average, id } = item;

      return {
        posterImage: poster_path,
        title,
        date: release_date,
        rating: vote_average,
        id
      };
    });
  };

  return (
    <>
      <Header />

      <Container style={{ display: 'flex ' }}>
        <MovieCardList items={transformItems()} />
      </Container>
    </>
  );
};
