import { render, fireEvent, screen, waitFor } from '../../utils/test-utils';
import * as actions from '../../hooks/useActions';

import { Home } from '.';

const popularMoviesRequest = jest.fn();
jest.spyOn(actions, 'useActions').mockReturnValue({ popularMoviesRequest } as any);

jest.mock('../../components/Header', () => {
  return {
    __esModule: true,
    Header: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

const mockSetSearchParams = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [{ get: jest.fn() }, mockSetSearchParams]
}));

const mockToast = jest.fn();
jest.mock('../../hooks/useToast', () => {
  return {
    useToast: () => mockToast()
  };
});

const initialStateMock = {
  movies: {
    popularMovies: { data: [], loading: false, totalCount: 200 }
  }
};

const sut = (initialState = initialStateMock) => {
  return render(<Home />, initialState);
};

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
        ...initialStateMock.movies,
        popularMovies: {
          ...initialStateMock.movies.popularMovies,
          loading: true
        }
      }
    });

    expect(screen.queryByRole('button', { name: '1' })).not.toBeInTheDocument();
  });

  it('should be able to handle fetch popular movies error', () => {
    const currentPage = 10;
    sut({
      movies: {
        ...initialStateMock.movies,
        popularMovies: {
          ...initialStateMock.movies.popularMovies,
          error: true,
          currentPage
        }
      } as any
    });

    expect(mockToast).toHaveBeenCalledTimes(1);
    expect(mockSetSearchParams).toHaveBeenCalledWith({ page: String(currentPage) });
  });
});
