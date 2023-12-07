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
}