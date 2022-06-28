import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loading,
  popularMoviesRequest,
  popularMoviesRequestFailure,
  popularMoviesRequestSuccess
} from './actions';
import { ActionTypes, IMoviesDTO } from './types';

type PopularMoviesRequest = ReturnType<typeof popularMoviesRequest>;

export function* handleGetPopularMovies({ payload }: PopularMoviesRequest) {
  const { page } = payload;

  try {
    yield put(loading());
    const { data }: AxiosResponse<{ results: IMoviesDTO[] }> = yield call(
      api.get,
      `/movie/popular?api_key=${process.env.API_KEY}&page=${page}`
    );

    yield put(popularMoviesRequestSuccess(data.results));
  } catch (error) {
    yield put(popularMoviesRequestFailure());
  }
}

export default all([takeLatest(ActionTypes.popularMoviesRequest, handleGetPopularMovies)]);
