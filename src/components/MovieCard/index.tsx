import { Star } from '@styled-icons/material';
import { AnchorHTMLAttributes } from 'react';
import { getFullYear } from '../../utils/date';

import * as S from './styles';

export type MovieCardProps = {
  posterImage: string;
  title: string;
  rating: number;
  date: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const MovieCard = ({ posterImage, title, rating, date, ...props }: MovieCardProps) => {
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
