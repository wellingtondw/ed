import { Reducer } from 'redux';
import { ActionTypes, IMovieState } from './types';

export const INITIAL_STATE: IMovieState = {
  details: {
    data: {
      genres: [],
      id: null,
      overview: '',
      poster_path: '',
      production_companies: [],
      title: '',
      vote_average: 0
    },
    loading: false,
    error: false
  }
};

const movies: Reducer<IMovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.loadingMovieDetails: {
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          error: false
        }
      };
    }
    case ActionTypes.movieDetailsRequestSuccess: {
      const { data } = action.payload;
      return {
        ...state,
        details: {
          ...state.details,
          data,
          loading: false,
          error: false
        }
      };
    }
    case ActionTypes.movieDetailsRequestFailure: {
      return {
        ...state,
        details: {
          ...state.details,
          error: true,
          loading: false
        }
      };
    }
    default: {
      return state;
    }
  }
};
export default movies;
