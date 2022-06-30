import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { popularMoviesRequest, searchMoviesRequest } from '../store/modules/movies/actions';
import { movieDetailsRequest } from '../store/modules/movie/actions';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      popularMoviesRequest,
      searchMoviesRequest,
      movieDetailsRequest
    },
    dispatch
  );
};
