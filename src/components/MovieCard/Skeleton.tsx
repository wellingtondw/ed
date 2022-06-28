import * as S from './styles';

export const MovieCardSkeleton = () => (
  <S.SkeletonWrapper data-testid="skeleton">
    <div></div>
    <div>
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </S.SkeletonWrapper>
);
