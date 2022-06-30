export enum ActionTypes {
  loadingMovieDetails = 'LOADING_MOVIE_DETAILS',
  movieDetailsRequest = 'MOVIE_DETAILS_REQUEST',
  movieDetailsRequestSuccess = 'MOVIE_DETAILS_REQUEST_SUCCESS',
  movieDetailsRequestFailure = 'MOVIE_DETAILS_REQUEST_FAILURE'
}

export type IMovieDetailDTO = {
  title: string;
  id: number | null;
  genres: { id: number; name: string }[];
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
};

type IMovieDetailsData = {
  data: IMovieDetailDTO;
  loading: boolean;
  error: boolean;
};

export type IMovieState = {
  details: IMovieDetailsData;
};
