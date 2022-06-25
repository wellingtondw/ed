import { ActionTypes } from './types';

export const loading = () => ({
  type: ActionTypes.loading
});
export const exampleRequest = () => ({
  type: ActionTypes.exampleRequest
});
export const exampleRequestSuccess = (example: string) => ({
  type: ActionTypes.exampleRequestSuccess,
  payload: example
});
export const exampleRequestFailure = () => ({
  type: ActionTypes.exampleRequestFailure
});
