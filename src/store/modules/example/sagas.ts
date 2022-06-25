import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loading, exampleRequestFailure, exampleRequestSuccess } from './actions';
import { ActionTypes } from './types';

export function* handleGetExample() {
  try {
    yield put(loading());
    const { data }: AxiosResponse<string> = yield call(api.get, '/');

    yield put(exampleRequestSuccess(data));
  } catch (error) {
    yield put(exampleRequestFailure());
  }
}

export default all([takeLatest(ActionTypes.exampleRequest, handleGetExample)]);
