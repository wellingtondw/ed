import { render, screen } from '../../utils/test-utils';

import { formatMoviesList } from 'utils/movies';
import movieCardListMock from './mock';

import { MovieCardList } from '.';

const sut = (loading = false) => {
  return render(
    <MovieCardList loading={loading} items={formatMoviesList({ items: movieCardListMock })} />
  );
};

describe('<MovieCardList />', () => {
  it('should be able to render correctly', () => {
    const { container } = sut();

    expect(screen.getAllByRole('listitem')).toHaveLength(6);
    expect(container).toMatchSnapshot();
  });

  it('should be able to render skeleton if loading is true', () => {
    sut(true);

    expect(screen.getAllByTestId('skeleton')).toHaveLength(10);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
