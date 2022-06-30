import { Link } from 'react-router-dom';
import { Search, Movie } from '@styled-icons/material';

import { useActions } from '../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState } from '../../hooks/useGlobalState';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../hooks/useToast';

import { formatMoviesList } from '../../utils/movies';

import { Spinner } from '../../components/Spinner';
import { Container } from '../Container';
import { Input } from '../Input';

import * as S from './styles';

export const Header = () => {
  const searchResultsRef = useRef(null);
  const [openSearch, setOpenSearch] = useState(false);
  const { searchMoviesRequest } = useActions();
  const {
    movies: {
      search: { data, loading, error }
    }
  } = useGlobalState();
  const searchNotFound = data.length < 1;

  useEffect(() => {
    if (error) {
      useToast({ message: 'Ops, algo deu errado!' });
    }
  }, [error]);

  const debouncedSearchMoviesRequest = useDebounce(
    (value: string) => searchMoviesRequest({ query: value }),
    500
  );

  const handleSearch = (value: string) => {
    if (value.length > 0) {
      setOpenSearch(true);
      return debouncedSearchMoviesRequest(value);
    }
  };

  useClickOutside({ ref: searchResultsRef, callback: () => setOpenSearch(false) });
  return (
    <S.Wrapper>
      <S.SearchWrapper ref={searchResultsRef}>
        <Container>
          <Input
            placeholder="Pesquisar por filme"
            icon={<Search />}
            iconPosition="right"
            onInputChange={handleSearch}
          />

          <S.SearchResults
            aria-label="search results"
            isOpen={openSearch}
            isLoading={loading}
            notFound={!!searchNotFound}>
            {loading ? (
              <Spinner aria-label="carregando" />
            ) : searchNotFound ? (
              <p>Nenhum resultado para a pesquisa</p>
            ) : (
              formatMoviesList({ items: data }).map((movie) => {
                return (
                  <Link
                    to={`/movie/${movie.id}`}
                    onClick={() => setOpenSearch(false)}
                    key={movie.id}>
                    <Movie width={20} height={20} />
                    <span>{movie.title}</span>
                  </Link>
                );
              })
            )}
          </S.SearchResults>
        </Container>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};
