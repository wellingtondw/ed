import { ActionTypes, IMoviesDTO } from './types';

//Popular Movies
export const loadingPopularMovies = () => ({
  type: ActionTypes.loadingPopularMovies
});

export const popularMoviesRequest = (page?: number) => ({
  type: ActionTypes.popularMoviesRequest,
  payload: { page }
});

type PopularMoviesRequestSuccessProps = {
  results: IMoviesDTO[];
  totalCount: number;
  page?: number;
};

export const popularMoviesRequestSuccess = ({
  results,
  totalCount,
  page
}: PopularMoviesRequestSuccessProps) => ({
  type: ActionTypes.popularMoviesRequestSuccess,
  payload: {
    results,
    totalCount,
    page
  }
});

export const popularMoviesRequestFailure = () => ({
  type: ActionTypes.popularMoviesRequestFailure
});

//Search
export const loadingSearchMovies = () => ({
  type: ActionTypes.loadingSearchMovies
});

type searchMoviesRequestProps = {
  query: string;
};

export const searchMoviesRequest = ({ query }: searchMoviesRequestProps) => ({
  type: ActionTypes.searchMoviesRequest,
  payload: { query }
});

type SearchMoviesRequestSuccessProps = {
  results: IMoviesDTO[];
};

export const searchMoviesRequestSuccess = ({ results }: SearchMoviesRequestSuccessProps) => ({
  type: ActionTypes.searchMoviesRequestSuccess,
  payload: {
    results
  }
});

export const searchMoviesRequestFailure = () => ({
  type: ActionTypes.searchMoviesRequestFailure
});

export const resetMoviesSearch = () => ({
  type: ActionTypes.resetMoviesSearch
});
