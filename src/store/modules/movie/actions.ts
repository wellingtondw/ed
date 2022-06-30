import { ActionTypes, IMovieDetailDTO } from './types';
//Movie Details
export const loadingMovieDetails = () => ({
  type: ActionTypes.loadingMovieDetails
});

export const movieDetailsRequest = (id: string) => ({
  type: ActionTypes.movieDetailsRequest,
  payload: { id }
});

type MovieDetailsRequestSuccessProps = {
  data: IMovieDetailDTO;
};

export const movieDetailsRequestSuccess = ({ data }: MovieDetailsRequestSuccessProps) => ({
  type: ActionTypes.movieDetailsRequestSuccess,
  payload: {
    data
  }
});

export const movieDetailsRequestFailure = () => ({
  type: ActionTypes.movieDetailsRequestFailure
});
