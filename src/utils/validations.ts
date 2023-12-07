/**
 * Class for validating CPF (Cadastro de Pessoas Físicas) or CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers.
 */
export class Validate {
  /**
   * Validates a CPF or CNPJ number.
   * @param number - The CPF or CNPJ number to validate.
   * @returns A boolean indicating whether the number is valid or not.
   */
  public static validateCpfOrCnpj(number: string): boolean {
    const cleanedNumber = number.replace(/[^\d]+/g, '');
    if(/^(\d)\1+$/.test(cleanedNumber)) return false;

    if (this.isValidCpf(cleanedNumber)) {
      return this.validateCpf(cleanedNumber);
    } else {
      return this.validateCnpj(cleanedNumber);
    }
  }

  /**
   * Validates if the given installment value is correct based on the total value and number of installments.
   * 
   * @param totalValue - The total value to be divided into installments.
   * @param installmentsNumber - The number of installments.
   * @param installmentValue - The expected value for each installment.
   * @returns True if the installment value is correct, false otherwise.
   */
  public static validateValue(totalValue: number, installmentsNumber: number, installmentValue: number) {
    const value = totalValue / installmentsNumber;

    if(value !== installmentValue) {
      return false;
    }

    return true;
  }

  /**
   * Validates a CPF number.
   * @param number - The CPF number to validate.
   * @returns A boolean indicating whether the CPF number is valid or not.
   */
  protected static validateCpf(number: string): boolean {
    const cpf = number.substring(0, 9);
    const checkDigit1 = parseInt(number.substring(9, 10));
    const checkDigit2 = parseInt(number.substring(10, 11));

    const calculatedCheckDigit1 = this.calculateRemainderCpf(cpf, 10);
    const calculatedCheckDigit2 = this.calculateRemainderCpf(cpf + calculatedCheckDigit1.toString(), 11);

    return checkDigit1 === calculatedCheckDigit1 && checkDigit2 === calculatedCheckDigit2;
  }

  /**
   * Validates a CNPJ number.
   * @param number - The CNPJ number to validate.
   * @returns A boolean indicating whether the CNPJ number is valid or not.
   */
  protected static validateCnpj(number: string): boolean {
    const cnpj = number.substring(0, 12);
    const checkDigit1 = parseInt(number.substring(12, 13));
    const checkDigit2 = parseInt(number.substring(13, 14));

    const calculatedCheckDigit1 = this.calculateRemainderCnpj(cnpj, 5);
    const calculatedCheckDigit2 = this.calculateRemainderCnpj(cnpj + calculatedCheckDigit1.toString(), 6);

    return checkDigit1 === calculatedCheckDigit1 && checkDigit2 === calculatedCheckDigit2;
  }

  /**
   * Calculates the check digit for a CPF number.
   * @param numbers - The numbers of the CPF without the check digits.
   * @param position - The position of the check digit.
   * @returns The calculated check digit.
   */
  protected static calculateRemainderCpf(numbers: string, position: number): number {
    let sum = 0;
    let multiplier = position;

    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers.charAt(i)) * multiplier--;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  /**
   * Calculates the check digit for a CNPJ number.
   * @param numbers - The numbers of the CNPJ without the check digits.
   * @param position - The position of the check digit.
   * @returns The calculated check digit.
   */
  protected static calculateRemainderCnpj(numbers: string, position: number): number {
    let sum = 0;
    let multiplier = position;

    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers.charAt(i)) * multiplier;
        multiplier = (multiplier === 2) ? 9 : multiplier - 1;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  /**
   * Checks if a string represents a valid CPF number.
   * @param number - The string to check.
   * @returns A boolean indicating whether the string represents a valid CPF number or not.
   */
  protected static isValidCpf(number: string): boolean {
    return number !== '' && number.length === 11;
  }

  /**
   * Checks if a string represents a valid CNPJ number.
   * @param number - The string to check.
   * @returns A boolean indicating whether the string represents a valid CNPJ number or not.
   */
  protected static isValidCnpj(number: string): boolean {
    return number !== '' && number.length === 14;
  }
}