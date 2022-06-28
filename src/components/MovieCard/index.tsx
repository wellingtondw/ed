import { AnchorHTMLAttributes } from 'react';
import { Star } from '@styled-icons/material';

import { getFullYear } from '../../utils/date';
import { Skeleton } from './Skeleton';

import * as S from './styles';

export type MovieCardDTO = {
  posterImage: string;
  title: string;
  rating: number;
  date: string;
};

export type MovieCardProps = {
  loading?: boolean;
} & MovieCardDTO &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const MovieCard = ({
  posterImage,
  title,
  rating,
  date,
  loading = false,
  ...props
}: MovieCardProps) => {
  if (loading) {
    return <Skeleton />;
  }

  return (
    <S.Wrapper {...props}>
      <S.PosterWrapper>
        <S.Poster src={posterImage} alt={title} />
      </S.PosterWrapper>

      <S.ContentWrapper>
        <S.Title>{title}</S.Title>

        <S.InfoWrapper>
          <S.Year>{getFullYear({ date })}</S.Year>
          <S.Rating>
            <Star />
            <span>{rating}</span>
          </S.Rating>
        </S.InfoWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
