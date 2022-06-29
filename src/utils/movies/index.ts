import { MovieCardListDTO } from 'components/MovieCardList';
import { IMoviesDTO } from 'store/modules/movies/types';

type FormatMoviesListParams = {
  items: IMoviesDTO[];
};

export const formatMoviesList = ({ items }: FormatMoviesListParams) => {
  return items.map((item): MovieCardListDTO => {
    const { poster_path, title, release_date, vote_average, id } = item;

    return {
      posterImage: `${process.env.IMAGES_ENDPOINT_URL}${poster_path}`,
      title,
      date: release_date,
      rating: vote_average,
      id
    };
  });
};
