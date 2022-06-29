export enum ActionTypes {
  loadingPopularMovies = 'LOADING_POPULAR_MOVIES',
  popularMoviesRequest = 'POPULAR_MOVIES_REQUEST',
  popularMoviesRequestSuccess = 'POPULAR_MOVIES_REQUEST_SUCCESS',
  popularMoviesRequestFailure = 'POPULAR_MOVIES_REQUEST_FAILURE',

  loadingSearchMovies = 'LOADING_SEARCH_MOVIES',
  searchMoviesRequest = 'SEARCH_MOVIES_REQUEST',
  searchMoviesRequestSuccess = 'SEARCH_MOVIES_REQUEST_SUCCESS',
  searchMoviesRequestFailure = 'SEARCH_MOVIES_REQUEST_FAILURE',
  resetMoviesSearch = 'RESET_MOVIES_SEARCH'
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

type IMoviesData = {
  data: IMoviesDTO[];
  currentPage: number;
  loading: boolean;
  error: boolean;
  totalCount: number;
};

type ISearchData = {
  data: IMoviesDTO[];
  loading: boolean;
  error: boolean;
};

export type IMoviesState = {
  popularMovies: IMoviesData;
  search: ISearchData;
};
