import { render, fireEvent, screen, waitFor } from '../../utils/test-utils';
import * as actions from '../../hooks/useActions';

import { Home } from '.';

const initialStateMock = {
  movies: {
    popularMovies: { data: [], loading: false, currentPage: 2, totalCount: 200 }
  }
};

const sut = (initialState = initialStateMock) => {
  return render(<Home />, initialState);
};
const popularMoviesRequest = jest.fn();
jest.spyOn(actions, 'useActions').mockReturnValue({ popularMoviesRequest });

describe('<Home />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to render correctly', () => {
    const { container } = sut();

    expect(container).toMatchSnapshot();
  });

  it('should be able to load popular movies on render Home page', () => {
    sut();

    expect(popularMoviesRequest).toHaveBeenCalledTimes(1);
  });

  it('should be able to load popular movies with pagination', async () => {
    sut();

    const page = '3';
    const paginationButton = await waitFor(() => screen.getByRole('button', { name: page }));
    fireEvent.click(paginationButton);

    expect(popularMoviesRequest).toBeCalledTimes(2);
    expect(popularMoviesRequest).toBeCalledWith(Number(page));
  });

  it('should not be able to render Pagination component if loading', () => {
    sut({
      movies: {
        popularMovies: {
          ...initialStateMock.movies.popularMovies,
          loading: true
        }
      }
    });

    expect(screen.queryByRole('button', { name: '1' })).not.toBeInTheDocument();
  });
});
