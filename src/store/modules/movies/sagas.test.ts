import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import api from '../../../services/api';
import reducer, { INITIAL_STATE } from './reducer';
import { handleGetPopularMovies } from './sagas';
import {
  loadingPopularMovies,
  popularMoviesRequest,
  popularMoviesRequestFailure,
  popularMoviesRequestSuccess
} from './actions';
import { IMoviesDTO } from './types';

const initialState = INITIAL_STATE;
const movieId = '1';
const language = 'pt-BR';
const page = 2;

describe('MovieSagas', () => {
  it('should be able to loading fetch popular movies', () => {
    return expectSaga(() => handleGetPopularMovies(popularMoviesRequest(page)))
      .withReducer(reducer)
      .put(loadingPopularMovies())
      .hasFinalState({
        ...initialState,
        popularMovies: {
          ...initialState.popularMovies,
          loading: true,
          error: false
        }
      })
      .silentRun();
  });

  it('should be able to fetch popular movies', () => {
    const fakePopularMovie: IMoviesDTO = {
      id: 1,
      poster_path: 'some poster path',
      release_date: '2022-10-05',
      title: 'some title',
      vote_average: 7.5
    };
    const fakePopularMovies = [fakePopularMovie];
    const totalCount = 100;

    return expectSaga(() => handleGetPopularMovies(popularMoviesRequest(page)))
      .withReducer(reducer)
      .put(loadingPopularMovies())
      .provide([
        [
          call(
            api.get,
            `/movie/popular?api_key=${process.env.API_KEY}&page=${page}&language=${language}`
          ),
          { data: { results: fakePopularMovies, total_results: totalCount } }
        ]
      ])
      .dispatch(popularMoviesRequestSuccess({ page, results: fakePopularMovies, totalCount }))
      .hasFinalState({
        ...initialState,
        popularMovies: {
          ...initialState.popularMovies,
          data: fakePopularMovies,
          loading: false,
          error: false,
          currentPage: 2,
          totalCount
        }
      })
      .run();
  });

  it('should be able to handle fetch movie details error', () => {
    const error = new Error('error');

    return expectSaga(() => handleGetPopularMovies(popularMoviesRequest(page)))
      .withReducer(reducer)
      .put(loadingPopularMovies())
      .provide([
        [
          call(
            api.get,
            `/movie/popular?api_key=${process.env.API_KEY}&page=${page}&language=${language}`
          ),
          throwError(error)
        ]
      ])
      .dispatch(popularMoviesRequestFailure())
      .hasFinalState({
        ...initialState,
        popularMovies: {
          ...initialState.popularMovies,
          loading: false,
          error: true
        }
      })
      .run();
  });
});
