/* eslint-disable */

import { Main } from '../../src/main';

describe('Main', () => {
  let main: Main;

  beforeEach(() => {
    main = new Main();
  });

  describe('execute', () => {
    it('should return an array of CsvTypeResponse objects', async () => {
      const result = await main.execute();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('vlAtual');
      expect(result[0]).toHaveProperty('vlTotal');
      expect(result[0]).toHaveProperty('vlPresta');
      expect(result[0]).toHaveProperty('vlMora');
    });
  });
});