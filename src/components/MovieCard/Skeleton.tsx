import * as S from './styles';

export const Skeleton = () => (
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
