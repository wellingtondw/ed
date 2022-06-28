import movieCardListMock from '../../components/MovieCardList/mock';
import { formatMoviesList } from '.';

describe('utils/movies', () => {
  it('should be able to get full year from date', () => {
    const mock = movieCardListMock[0];
    const result = formatMoviesList({ items: [mock] });

    expect(result).toEqual([
      {
        id: 453395,
        date: '2022-05-04',
        posterImage: 'https://image.tmdb.org/t/p/w500/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg',
        rating: 7.5,
        title: 'Doutor Estranho no Multiverso da Loucura'
      }
    ]);
  });
});
