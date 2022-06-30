import { combineReducers } from 'redux';

import movies from './movies/reducer';
import movie from './movie/reducer';

export default combineReducers({
  movies,
  movie
});
