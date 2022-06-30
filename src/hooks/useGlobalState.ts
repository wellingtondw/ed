import { useSelector } from 'react-redux';
import { IMoviesState } from '../store/modules/movies/types';
import { IMovieState } from '../store/modules/movie/types';

export interface IState {
  movies: IMoviesState;
  movie: IMovieState;
}

export const useGlobalState = (): IState => {
  return useSelector<IState>((state) => state) as IState;
};
