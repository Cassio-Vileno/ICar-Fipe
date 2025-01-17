import { VehicleType } from '../types/vehicles';
import apiVehicle from './carApi.fetch.service';

export class BrandsService {
  static async execute(vehicle: VehicleType) {
    const { data } = await apiVehicle.get(`${vehicle}/marcas`);
    return data
  }
}

