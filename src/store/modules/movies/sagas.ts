import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadingPopularMovies,
  popularMoviesRequest,
  popularMoviesRequestFailure,
  popularMoviesRequestSuccess,
  loadingSearchMovies,
  searchMoviesRequest,
  searchMoviesRequestSuccess,
  searchMoviesRequestFailure
} from './actions';
import { ActionTypes, IMoviesResponseDTO } from './types';

type PopularMoviesRequest = ReturnType<typeof popularMoviesRequest>;
type SearchMoviesRequest = ReturnType<typeof searchMoviesRequest>;

const language = 'pt-BR';

export function* handleGetPopularMovies({ payload }: PopularMoviesRequest) {
  const { page } = payload;

  try {
    yield put(loadingPopularMovies());
    const { data }: AxiosResponse<IMoviesResponseDTO> = yield call(
      api.get,
      `/movie/popular?api_key=${process.env.API_KEY}&page=${page}&language=${language}`
    );

    const { results, total_results } = data;

    yield put(
      popularMoviesRequestSuccess({
        results,
        totalCount: total_results,
        page
      })
    );
  } catch (error) {
    yield put(popularMoviesRequestFailure());
  }
}

export function* handleSearchMovies({ payload }: SearchMoviesRequest) {
  const { query } = payload;

  try {
    yield put(loadingSearchMovies());
    const { data }: AxiosResponse<IMoviesResponseDTO> = yield call(
      api.get,
      `/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=${language}`
    );

    const { results } = data;

    yield put(
      searchMoviesRequestSuccess({
        results
      })
    );
  } catch (error) {
    yield put(searchMoviesRequestFailure());
  }
}

export default all([
  takeLatest(ActionTypes.popularMoviesRequest, handleGetPopularMovies),
  takeLatest(ActionTypes.searchMoviesRequest, handleSearchMovies)
]);
