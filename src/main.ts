import csvParser from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import { CsvType, CsvTypeResponse } from './types/csv-type';
import { Formatters } from './utils/formatters';
import { Validate } from './utils/validations';

/**
 * Represents the main class responsible for executing the CSV processing logic.
 */
export class Main {
  private readonly formatters = Formatters;
  private readonly validation = Validate;

  /**
   * Executes the CSV processing logic and returns a promise that resolves to an array of CsvTypeResponse objects.
   * @returns A promise that resolves to an array of CsvTypeResponse objects.
   */
  public async execute(): Promise<CsvTypeResponse[]> {
    return new Promise((resolve, reject) => {
      const results: CsvTypeResponse[] = [];

      fs.createReadStream(path.join(__dirname, '..', 'data', 'data.csv'))
        .pipe(csvParser())
        .on('data', (data) => results.push(this.processCsvData(data)))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }

  /**
   * Processes the CSV data and returns a CsvTypeResponse object.
   * @param csvData - The CSV data to be processed.
   * @returns A CsvTypeResponse object representing the processed CSV data.
   */
  private processCsvData(csvData: CsvType): CsvTypeResponse {
    return {
      ...csvData,
      vlAtual: this.formatters.formatMoney(csvData.vlAtual),
      vlTotal: this.formatters.formatMoney(csvData.vlTotal),
      vlPresta: this.formatters.formatMoney(csvData.vlPresta),
      vlMora: this.formatters.formatMoney(csvData.vlMora),
      vlMulta: this.formatters.formatMoney(csvData.vlMulta),
      vlOutAcr: this.formatters.formatMoney(csvData.vlOutAcr),
      vlIof: this.formatters.formatMoney(csvData.vlIof),
      vlDescon: this.formatters.formatMoney(csvData.vlDescon),
      dtContrato: this.formatters.formatDate(csvData.dtContrato.toString()),
      dtVctPre: this.formatters.formatDate(csvData.dtVctPre.toString()),
      cpfCnpjValido: this.validation.validateCpfOrCnpj(csvData.nrCpfCnpj.toString()),
      vlValido: this.validation.validateValue(csvData.vlTotal, csvData.qtPrestacoes, csvData.vlPresta),
    }
  }
}

(async () => {
  const main = new Main();
  const result = await main.execute();

  console.log(result);
})()