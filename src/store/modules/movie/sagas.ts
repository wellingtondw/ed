import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadingMovieDetails,
  movieDetailsRequest,
  movieDetailsRequestSuccess,
  movieDetailsRequestFailure
} from './actions';
import { ActionTypes, IMovieDetailDTO } from './types';

type MovieDetailsRequest = ReturnType<typeof movieDetailsRequest>;

const language = 'pt-BR';

export function* handleGetMovieDetails({ payload }: MovieDetailsRequest) {
  const { id } = payload;

  try {
    yield put(loadingMovieDetails());
    const { data }: AxiosResponse<IMovieDetailDTO> = yield call(
      api.get,
      `/movie/${id}?api_key=${process.env.API_KEY}&language=${language}`
    );

    yield put(
      movieDetailsRequestSuccess({
        data
      })
    );
  } catch (error) {
    yield put(movieDetailsRequestFailure());
  }
}

export default all([takeLatest(ActionTypes.movieDetailsRequest, handleGetMovieDetails)]);
