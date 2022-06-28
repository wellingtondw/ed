import { Reducer } from 'redux';
import { ActionTypes, IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  data: {
    popularMovies: []
  },
  loading: false,
  error: false
};

const movies: Reducer<IMoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.loading: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.popularMoviesRequestSuccess: {
      return {
        ...state,
        data: {
          ...state.data,
          popularMovies: action.payload
        },
        loading: false,
        error: false
      };
    }
    case ActionTypes.popularMoviesRequestFailure: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};
export default movies;
