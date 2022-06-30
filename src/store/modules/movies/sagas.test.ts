import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import api from '../../../services/api';
import reducer, { INITIAL_STATE } from './reducer';
import { handleGetPopularMovies, handleSearchMovies } from './sagas';
import {
  loadingPopularMovies,
  loadingSearchMovies,
  popularMoviesRequest,
  popularMoviesRequestFailure,
  popularMoviesRequestSuccess,
  searchMoviesRequest,
  searchMoviesRequestFailure,
  searchMoviesRequestSuccess
} from './actions';
import { IMoviesDTO } from './types';

const initialState = INITIAL_STATE;
const query = 'any query';
const language = 'pt-BR';
const page = 2;

describe('MovieSagas', () => {
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

  it('should be able to handle fetch popular movies error', () => {
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

  it('should be able to loading search movies', () => {
    return expectSaga(() => handleSearchMovies(searchMoviesRequest({ query })))
      .withReducer(reducer)
      .put(loadingSearchMovies())
      .hasFinalState({
        ...initialState,
        search: {
          ...initialState.search,
          loading: true,
          error: false
        }
      })
      .silentRun();
  });

  it('should be able to search movies', () => {
    const fakeSearchMovie: IMoviesDTO = {
      id: 1,
      poster_path: 'some poster path',
      release_date: '2022-10-05',
      title: 'some title',
      vote_average: 7.5
    };
    const fakeSearchMovies = [fakeSearchMovie];

    return expectSaga(() => handleSearchMovies(searchMoviesRequest({ query })))
      .withReducer(reducer)
      .put(loadingSearchMovies())
      .provide([
        [
          call(
            api.get,
            `/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=${language}`
          ),
          { data: { results: fakeSearchMovies } }
        ]
      ])
      .dispatch(searchMoviesRequestSuccess({ results: fakeSearchMovies }))
      .hasFinalState({
        ...initialState,
        search: {
          ...initialState.search,
          data: fakeSearchMovies,
          loading: false,
          error: false
        }
      })
      .run();
  });

  it('should be able to handle search movies error', () => {
    const error = new Error('error');

    return expectSaga(() => handleSearchMovies(searchMoviesRequest({ query })))
      .withReducer(reducer)
      .put(loadingSearchMovies())
      .provide([
        [
          call(
            api.get,
            `/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=${language}`
          ),
          throwError(error)
        ]
      ])
      .dispatch(searchMoviesRequestFailure())
      .hasFinalState({
        ...initialState,
        search: {
          ...initialState.search,
          loading: false,
          error: true
        }
      })
      .run();
  });
});
