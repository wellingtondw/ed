import { Reducer } from 'redux';
import { ActionTypes, IExampleState } from './types';

export const INITIAL_STATE: IExampleState = {
  data: {
    example: ''
  },
  loading: false,
  error: false
};

const example: Reducer<IExampleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.loading: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.exampleRequestSuccess: {
      return {
        ...state,
        data: {
          ...state.data,
          example: action.payload
        },
        loading: false,
        error: false
      };
    }
    case ActionTypes.exampleRequestFailure: {
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
export default example;
