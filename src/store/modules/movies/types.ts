export enum ActionTypes {
  loading = 'LOADING',
  popularMoviesRequest = 'POPULAR_MOVIES_REQUEST',
  popularMoviesRequestSuccess = 'POPULAR_MOVIES_REQUEST_SUCCESS',
  popularMoviesRequestFailure = 'POPULAR_MOVIES_REQUEST_FAILURE'
}

export type IMoviesDTO = {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  id: number;
};

export type IMoviesState = {
  data: {
    popularMovies: IMoviesDTO[];
  };
  loading: boolean;
  error: boolean;
};
