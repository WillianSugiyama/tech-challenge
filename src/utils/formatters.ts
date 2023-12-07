/**
 * Utility class for formatting values.
 */
export class Formatters {
  /**
   * Formats a number as a currency value.
   * @param value - The number to format.
   * @returns The formatted currency value.
   */
  public static formatMoney(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  /**
   * Formats a date string into a Date object.
   * @param date - The date string to be formatted.
   * @returns The formatted Date object.
   */
  public static formatDate(date: string): Date  {
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(4, 6)) - 1;
    const day = parseInt(date.substring(6, 8));

    return new Date(year, month, day);
  }
}