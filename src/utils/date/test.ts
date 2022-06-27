import { getFullYear } from '.';

describe('utils/date', () => {
  it('should be able to get full year from date', () => {
    const dateString = '2022-05-04';
    let result = getFullYear({ date: dateString });

    expect(result).toBe(2022);

    const date = 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)';
    result = getFullYear({ date });

    expect(result).toBe(2017);
  });
});
