export interface CsvType {
  nrInst: number;
  nrAgencia: number;
  cdClient: number;
  nmClient: string;
  nrCpfCnpj: number;
  nrContrato: number;
  dtContrato: number;
  qtPrestacoes: number;
  vlTotal: number;
  cdProduto: number;
  dsProduto: string;
  cdCarteira: number;
  dsCarteira: string;
  nrProposta: number;
  nrPresta: number;
  tpPresta: string;
  nrSeqPre: number;
  dtVctPre: number;
  vlPresta: number;
  vlMora: number;
  vlMulta: number;
  vlOutAcr: number;
  vlIof: number;
  vlDescon: number;
  vlAtual: number;
  idSituac: string;
  idSitVen: string;
}

export type CsvTypeResponse = Omit<CsvType, 'dtContrato' | 'dtVctPre' | 'vlPresta' | 'vlMora' | 'vlMulta' | 'vlOutAcr' | 'vlIof' | 'vlDescon' | 'vlTotal' | 'vlAtual'> & {
  vlPresta: string;
  vlMora: string;
  vlMulta: string;
  vlOutAcr: string;
  vlIof: string;
  vlDescon: string;
  vlAtual: string;
  vlTotal: string;
  cpfCnpjValido: boolean;
  vlValido: boolean;
  dtContrato: Date;
  dtVctPre: Date;
}