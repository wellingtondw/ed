import { MovieCardListDTO } from 'components/MovieCardList';

export type MoviesDTO = {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  id: number;
};

type FormatMoviesListParams = {
  items: MoviesDTO[];
};

export const formatMoviesList = ({ items }: FormatMoviesListParams) => {
  return items.map((item): MovieCardListDTO => {
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
