import { all } from 'redux-saga/effects';

import movies from './movies/sagas';
import movie from './movie/sagas';

export default function* rootSaga() {
  yield all([movies, movie]);
}
