import { ActionTypes, IMoviesDTO } from './types';

export const loading = () => ({
  type: ActionTypes.loading
});
export const popularMoviesRequest = (page: number) => ({
  type: ActionTypes.popularMoviesRequest,
  payload: { page }
});
export const popularMoviesRequestSuccess = (results: IMoviesDTO[]) => ({
  type: ActionTypes.popularMoviesRequestSuccess,
  payload: results
});
export const popularMoviesRequestFailure = () => ({
  type: ActionTypes.popularMoviesRequestFailure
});
