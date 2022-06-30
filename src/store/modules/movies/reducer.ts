import { Reducer } from 'redux';
import { ActionTypes, IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  popularMovies: {
    data: [],
    currentPage: 1,
    loading: false,
    error: false,
    totalCount: 0
  },
  search: {
    data: [],
    loading: false,
    error: false
  }
};

const movies: Reducer<IMoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.loadingPopularMovies: {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: true,
          error: false
        }
      };
    }
    case ActionTypes.popularMoviesRequestSuccess: {
      const { results, totalCount, page } = action.payload;
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: results,
          totalCount,
          currentPage: page,
          loading: false,
          error: false
        }
      };
    }
    case ActionTypes.popularMoviesRequestFailure: {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          error: true,
          loading: false
        }
      };
    }
    case ActionTypes.loadingSearchMovies: {
      return {
        ...state,
        search: {
          ...state.search,
          loading: true,
          error: false
        }
      };
    }
    case ActionTypes.searchMoviesRequestSuccess: {
      const { results } = action.payload;
      return {
        ...state,
        search: {
          ...state.search,
          data: results,
          loading: false,
          error: false
        }
      };
    }
    case ActionTypes.searchMoviesRequestFailure: {
      return {
        ...state,
        search: {
          ...state.search,
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
