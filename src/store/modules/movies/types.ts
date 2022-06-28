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

export type IMoviesResponseDTO = {
  total_results: number;
  results: IMoviesDTO[];
};

export type IMoviesState = {
  popularMovies: {
    data: IMoviesDTO[];
    currentPage: number;
    loading: boolean;
    error: boolean;
    totalCount: number;
  };
};
