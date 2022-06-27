import { getFullYear } from '../../utils/date';
import { render, screen } from '../../utils/test-utils';

import { MovieCard } from '.';
import movieMock from './mock';

const { poster_path, title, release_date, vote_average, id } = movieMock;
const sut = (href = '') => {
  return render(
    <MovieCard
      posterImage={poster_path}
      title={title}
      rating={vote_average}
      date={release_date}
      href={href}
    />
  );
};

describe('<MovieCard>', () => {
  it('should be able to render correctly', () => {
    const { container } = sut();

    const year = getFullYear({ date: release_date });

    expect(screen.getByRole('img', { name: title })).toHaveAttribute('src', poster_path);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByText(vote_average)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should be able to redirect', () => {
    const href = `/${id}`;
    sut(href);

    const movieCardEl = screen.getByRole('link');

    expect(movieCardEl).toHaveAttribute('href', href);
  });
});
