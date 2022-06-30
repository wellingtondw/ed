import { render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import * as actions from '../../hooks/useActions';

import { Header } from '.';

const mockToast = jest.fn();
jest.mock('../../hooks/useToast', () => {
  return {
    useToast: () => mockToast()
  };
});

const initialStateMock = {
  movies: {
    search: { data: [], loading: false }
  }
};

const sut = (initialState = initialStateMock) => {
  return render(<Header />, initialState);
};

const searchMoviesRequest = jest.fn();
jest.spyOn(actions, 'useActions').mockReturnValue({ searchMoviesRequest } as any);

describe('<Header />', () => {
  it('should be able to show loading spinner on search', () => {
    const state = {
      movies: {
        search: {
          ...initialStateMock.movies.search,
          loading: true
        }
      }
    };
    sut(state);

    expect(screen.getByLabelText('carregando')).toBeInTheDocument();
  });

  it('should be able to show not found text if dont have search results', () => {
    sut();

    expect(screen.getByText('Nenhum resultado para a pesquisa')).toBeInTheDocument();
  });

  it('should be able to render search results', () => {
    const state = {
      movies: {
        search: {
          ...initialStateMock.movies.search,
          data: [
            {
              id: 10,
              title: 'Doutor Estranho no Multiverso da Loucura'
            }
          ]
        }
      }
    };

    sut(state as any);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/10');
  });

  it('should be able to search on change input', async () => {
    sut();

    const inputEl = screen.getByRole('textbox');
    const value = 'example';
    userEvent.type(inputEl, value);

    await waitFor(() => {
      expect(searchMoviesRequest).toHaveBeenCalledWith({ query: value });
      expect(screen.getByLabelText('search results')).toHaveStyle({ opacity: 1 });
    });
  });

  it('should not be able to show search wrapper if input has no value', () => {
    sut();

    const inputEl = screen.getByRole('textbox');
    const value = '';
    userEvent.type(inputEl, value);

    expect(screen.getByLabelText('search results')).toBeInTheDocument();
    expect(screen.getByLabelText('search results')).toHaveStyle({ opacity: 0 });
  });

  it('should be able to handle search results errors', () => {
    const state = {
      movies: {
        search: {
          ...initialStateMock.movies.search,
          error: true
        }
      }
    };

    sut(state as any);

    expect(mockToast).toHaveBeenCalledTimes(1);
  });
});
