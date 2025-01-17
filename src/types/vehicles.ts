export type VehicleType = "carros" | "motos" | "caminhoes";

export type CriteriaVehicle = {
  vehicles: VehicleType;
  brand: string;
  model: string;
  yearCode: string;
}