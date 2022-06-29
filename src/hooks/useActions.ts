import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { popularMoviesRequest } from '../store/modules/movies/actions';
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      popularMoviesRequest
    },
    dispatch
  );
};
