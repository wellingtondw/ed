import { render, screen } from 'utils/test-utils';
import * as actions from '../../hooks/useActions';

import { MovieDetails } from '.';

const mockId = '186412d848g12d64712748176';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockId
  }),
  useNavigate: () => mockNavigate
}));

const mockToast = jest.fn();
jest.mock('../../hooks/useToast', () => {
  return {
    useToast: () => mockToast()
  };
});

const initialStateMock = {
  movie: {
    details: {
      data: {
        genres: [],
        production_companies: []
      },
      loading: false
    }
  }
};

const sut = (initialState = initialStateMock) => {
  return render(<MovieDetails />, initialState);
};

const movieDetailsRequest = jest.fn();
jest.spyOn(actions, 'useActions').mockReturnValue({ movieDetailsRequest } as any);

describe('<MovieDetails />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to loading movie details', () => {
    sut();

    expect(movieDetailsRequest).toHaveBeenCalledTimes(1);
    expect(movieDetailsRequest).toHaveBeenCalledWith(mockId);
  });

  it('should be able to show spinner if loading is true', () => {
    const initialState = {
      movie: {
        details: {
          ...initialStateMock.movie.details,
          loading: true
        }
      }
    };

    sut(initialState);

    expect(screen.getByLabelText('carregando')).toBeInTheDocument();
  });

  it('should be able to show genres if exists', () => {
    const initialState = {
      movie: {
        details: {
          data: {
            genres: [
              {
                id: 1,
                name: 'terror'
              }
            ],
            production_companies: []
          },
          loading: false
        }
      }
    };

    sut(initialState as any);

    expect(screen.getByText('terror')).toBeInTheDocument();
  });

  it('should be able to show overview if exists', () => {
    const overview = 'This is an example';
    const initialState = {
      movie: {
        details: {
          data: {
            genres: [],
            production_companies: [],
            overview
          },
          loading: false
        }
      }
    };

    sut(initialState as any);

    expect(screen.getByText(overview)).toBeInTheDocument();
  });

  it('should be able to show production companies if exists', () => {
    const name = 'Legendary Pictures';
    const initialState = {
      movie: {
        details: {
          data: {
            genres: [],
            production_companies: [
              {
                id: 1,
                name
              }
            ]
          },
          loading: false
        }
      }
    };

    sut(initialState as any);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('should be able to handle fetch movie details error', () => {
    const initialState = {
      movie: {
        details: {
          ...initialStateMock.movie.details,
          error: true
        }
      }
    };

    sut(initialState as any);

    expect(mockToast).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
