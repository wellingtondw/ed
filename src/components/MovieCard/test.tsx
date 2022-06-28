import { getFullYear } from '../../utils/date';
import { render, screen } from '../../utils/test-utils';

import { MovieCard } from '.';
import movieMock from './mock';

const { poster_path, title, release_date, vote_average, id } = movieMock;

type SutProps = {
  to?: string;
  loading?: boolean;
};
const sut = ({ to = '/' }: SutProps) => {
  return render(
    <MovieCard
      posterImage={poster_path}
      title={title}
      rating={vote_average}
      date={release_date}
      to={to}
    />
  );
};

describe('<MovieCard>', () => {
  it('should be able to render correctly', () => {
    const { container } = sut({});

    const year = getFullYear({ date: release_date });

    expect(screen.getByRole('img', { name: title })).toHaveAttribute('src', poster_path);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByText(vote_average)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should be able to redirect', async () => {
    const to = `/${id}`;
    sut({ to });

    const movieCardEl = screen.getByRole('link');

    expect(movieCardEl).toHaveAttribute('href', to);
  });
});
