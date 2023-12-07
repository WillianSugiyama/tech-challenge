import { Validate } from '../../src/utils/validations';

describe('Validate', () => {
  describe('validateCpfOrCnpj', () => {
    it('should return true for a valid CPF', () => {
      // Numero gerado na 4devs: https://www.4devs.com.br/gerador_de_cpf
      const cpf = '502.886.870-00';
      expect(Validate.validateCpfOrCnpj(cpf)).toBe(true);
    });

    it('should return true for a valid CNPJ', () => {
      // Numero gerado na 4devs: https://www.4devs.com.br/gerador_de_cpf
      const cnpj = '67.261.640/0001-26';
      expect(Validate.validateCpfOrCnpj(cnpj)).toBe(true);
    });

    it('should return false for an invalid CPF', () => {
      const cpf = '111.111.111-11';
      expect(Validate.validateCpfOrCnpj(cpf)).toBe(false);
    });

    it('should return false for an invalid CNPJ', () => {
      const cnpj = '00.000.000/0000-00';
      expect(Validate.validateCpfOrCnpj(cnpj)).toBe(false);
    });
  });
});
