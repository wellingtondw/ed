import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';

import { Header } from '../../components/Header';
import { Container } from '../../components/Container';

import * as S from './styles';
import { useGlobalState } from '../../hooks/useGlobalState';
import { Spinner } from '../../components/Spinner';

type ParamsProps = {
  id: string;
};

export const MovieDetails = () => {
  const { movieDetailsRequest } = useActions();
  const {
    movie: {
      details: { data, loading }
    }
  } = useGlobalState();
  const { id } = useParams<ParamsProps>();

  useEffect(() => {
    movieDetailsRequest(id!);
  }, [id]);

  const { poster_path, title, overview, genres, vote_average, production_companies } = data;
  const haveGenres = genres.length > 0;
  const haveProductionCompanies = production_companies.length > 0;
  return (
    <>
      <Header />

      <Container>
        <S.Link to="/">Voltar</S.Link>
      </Container>

      <S.Wrapper>
        <Container>
          {loading ? (
            <S.Loading>
              <Spinner aria-label="carregando" />
            </S.Loading>
          ) : (
            <>
              <S.Left>
                <img
                  src={`${process.env.IMAGES_ENDPOINT_URL}${poster_path}`}
                  alt={title}
                  loading="lazy"
                />
              </S.Left>
              <S.Right>
                <S.Title>{title}</S.Title>

                {!!haveGenres && (
                  <S.Genres>
                    {genres.map((genre) => (
                      <S.Genre key={genre.id}>{genre.name}</S.Genre>
                    ))}
                  </S.Genres>
                )}

                <S.Rating>
                  <span>{vote_average}</span> Classificação Geral dos Utilizadores
                </S.Rating>

                {!!overview && (
                  <>
                    <S.Subtitle>Sinopse</S.Subtitle>
                    <S.Overview>{overview}</S.Overview>
                  </>
                )}

                {!!haveProductionCompanies && (
                  <>
                    <S.Subtitle>Produtoras</S.Subtitle>

                    {production_companies.map((prodCompany) => (
                      <S.Producers key={prodCompany.id}>{prodCompany.name}</S.Producers>
                    ))}
                  </>
                )}
              </S.Right>
            </>
          )}
        </Container>
      </S.Wrapper>
    </>
  );
};
