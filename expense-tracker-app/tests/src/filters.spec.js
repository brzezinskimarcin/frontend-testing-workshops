import { filters } from '@/src/filters.js';

describe('src/filters.js', () => {
  describe('date filter', () => {
    // it('for "null" returns ""', () => {
    //   const result = filters.date(null);
    //   expect(result).toBe('');
    // });

    // it('for "undefined" returns ""', () => {
    //   const result = filters.date(undefined);
    //   expect(result).toBe('');
    // });

    // it('for "2022-07-10T15:34:00" returns "10/07/2022 15:34"', () => {
    //   const result = filters.date(Date.parse('2022-07-10T15:34:00'));
    //   expect(result).toBe('10.07.2022 15:34');
    // });

    it.each([
      [null, ''],
      [undefined, ''],
      [Date.parse('2022-07-10T15:34:00'), '10.07.2022 15:34'],
    ])('for "%s" returns "%s"', (argument, expected) => {
      const result = filters.date(argument);
      expect(result).toBe(expected);
    });
  });
});
