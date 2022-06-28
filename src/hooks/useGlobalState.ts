import { useSelector } from 'react-redux';
import { IMoviesState } from '../store/modules/movies/types';

export interface IState {
  movies: IMoviesState;
}

export const useGlobalState = (): IState => {
  return useSelector<IState>((state) => state) as IState;
};
