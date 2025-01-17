import { VehicleType } from "./vehicles";

export type CrieteriaModels = {
  id: string;
  vehicles: VehicleType;
  yearId: string;
}

export type ModelYear = {
  nome: string,
  codigo: string
}

export type Model = {
  id: string,
  name: string
}

export type ModelDetails = {
  AnoModelo: number,
  CodigoFipe: string,
  Combustivel: string,
  Marca: string,
  MesReferencia: string,
  Modelo: string,
  SiglaCombustivel: string,
  TipoVeiculo: number,
  Valor: string
}