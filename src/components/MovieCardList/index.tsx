import { MovieCardSkeleton } from '../MovieCard/Skeleton';
import { MovieCard, MovieCardDTO } from '../MovieCard';

import * as S from './styles';

export type MovieCardListDTO = { id: number } & MovieCardDTO;

type MovieCardListProps = {
  items: MovieCardListDTO[];
  loading?: boolean;
};

export const MovieCardList = ({ items, loading = false, ...props }: MovieCardListProps) => {
  return (
    <S.Wrapper {...props}>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <S.Item key={index}>
              <MovieCardSkeleton />
            </S.Item>
          ))
        : items.map(({ posterImage, title, rating, date, id }) => {
            return (
              <S.Item key={id}>
                <MovieCard
                  posterImage={posterImage}
                  title={title}
                  rating={rating}
                  date={date}
                  to={`/movie/${id}`}
                />
              </S.Item>
            );
          })}
    </S.Wrapper>
  );
};
