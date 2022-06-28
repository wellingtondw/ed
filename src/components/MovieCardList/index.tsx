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
      {/* {items.map(({ posterImage, title, rating, date, id }) => {
        return (
          <S.Item key={id}>
            <MovieCard posterImage={posterImage} title={title} rating={rating} date={date} />
          </S.Item>
        );
      })} */}

      {items.map(({ posterImage, title, rating, date, id }) => {
        return (
          <S.Item key={id}>
            <MovieCard
              loading
              posterImage={posterImage}
              title={title}
              rating={rating}
              date={date}
            />
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};
