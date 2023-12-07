import { Formatters } from '../../src/utils/formatters';

describe('Formatters', () => {
  /*
    I'm using replace to trade the whitespace between the currency symbol and the value. it's a workaround with JEST.
  */

  describe('formatMoney', () => {
    it('should format a positive number as currency', () => {
      const value = 1000;
      const formattedValue = Formatters.formatMoney(value);
      expect(formattedValue.replace(/\s/, ' ')).toBe("R$ 1.000,00");
    });

    it('should format a negative number as currency', () => {
      const value = -500;
      const formattedValue = Formatters.formatMoney(value);
      expect(formattedValue.replace(/\s/, ' ')).toBe("-R$ 500,00");
    });

    it('should format zero as currency', () => {
      const value = 0;
      const formattedValue = Formatters.formatMoney(value);
      expect(formattedValue.replace(/\s/, ' ')).toBe("R$ 0,00");
    });

    it('should format a decimal number as currency', () => {
      const value = 1234.56;
      const formattedValue = Formatters.formatMoney(value);
      expect(formattedValue.replace(/\s/, ' ')).toBe("R$ 1.234,56");
    });

    it('should format a large number as currency', () => {
      const value = 1000000;
      const formattedValue = Formatters.formatMoney(value);
      expect(formattedValue.replace(/\s/, ' ')).toBe("R$ 1.000.000,00");
    });
  });

  describe('formatDate', () => {
    it('should format a date string to a Date object', () => {
      const dateString = '20220101';
      const formattedDate = Formatters.formatDate(dateString);
      expect(formattedDate).toEqual(new Date(2022, 0, 1));
    });
  })
});
