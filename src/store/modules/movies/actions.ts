import { ActionTypes, IMoviesDTO } from './types';

export const loading = () => ({
  type: ActionTypes.loading
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
