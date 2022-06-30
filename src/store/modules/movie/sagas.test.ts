import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import api from '../../../services/api';
import reducer, { INITIAL_STATE } from './reducer';
import { handleGetMovieDetails } from './sagas';
import {
  loadingMovieDetails,
  movieDetailsRequest,
  movieDetailsRequestFailure,
  movieDetailsRequestSuccess
} from './actions';
import { IMovieDetailDTO } from './types';

const initialState = INITIAL_STATE;
const movieId = '1';
const language = 'pt-BR';

describe('MovieSagas', () => {
  it('should be able to fetch movie details', () => {
    const fakeMovieDetails: IMovieDetailDTO = {
      id: 1,
      poster_path: 'some_path',
      title: 'some title',
      overview: 'some overview',
      genres: [{ id: 1, name: 'some genre' }],
      vote_average: 7.5,
      production_companies: [{ id: 2, name: 'some production company' }]
    };
    return expectSaga(() => handleGetMovieDetails(movieDetailsRequest(movieId)))
      .withReducer(reducer)
      .put(loadingMovieDetails())
      .provide([
        [
          call(api.get, `/movie/${movieId}?api_key=${process.env.API_KEY}&language=${language}`),
          { data: fakeMovieDetails }
        ]
      ])
      .dispatch(movieDetailsRequestSuccess({ data: fakeMovieDetails }))
      .hasFinalState({
        ...initialState,
        details: {
          ...initialState.details,
          data: fakeMovieDetails,
          loading: false,
          error: false
        }
      })
      .run();
  });

  it('should be able to handle fetch movie details error', () => {
    const error = new Error('error');

    return expectSaga(() => handleGetMovieDetails(movieDetailsRequest('1')))
      .withReducer(reducer)
      .put(loadingMovieDetails())
      .provide([
        [
          call(api.get, `/movie/${movieId}?api_key=${process.env.API_KEY}&language=${language}`),
          throwError(error)
        ]
      ])
      .dispatch(movieDetailsRequestFailure())
      .hasFinalState({
        ...initialState,
        details: {
          ...initialState.details,
          loading: false,
          error: true
        }
      })
      .run();
  });
});
