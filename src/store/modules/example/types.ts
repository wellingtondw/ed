export enum ActionTypes {
  loading = 'LOADING',
  exampleRequest = 'EXAMPLE_REQUEST',
  exampleRequestSuccess = 'EXAMPLE_REQUEST_SUCCESS',
  exampleRequestFailure = 'EXAMPLE_REQUEST_FAILURE'
}

export type IExampleState = {
  data: {
    example: string;
  };
  loading: boolean;
  error: boolean;
};
