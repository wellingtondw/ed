import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';
import movieMock from '../../components/MovieCard/mock';

export const Home = () => {
  const { poster_path, title, release_date, vote_average } = movieMock;
  return (
    <>
      <Header />
      <MovieCard
        posterImage={poster_path}
        title={title}
        rating={vote_average}
        date={release_date}
        loading
      />
    </>
  );
};
