import { CriteriaVehicle } from '../types/vehicles';
import apiVehicle from './carApi.fetch.service';

export class VehicleService {
  static async execute(criteria: Omit<CriteriaVehicle, 'model' | 'yearCode'>) {
    const { data } = await apiVehicle.get(`${criteria.vehicles}/marcas/${criteria.brand}/modelos`);
    return data
  }

  static async getYearVehicle(criteria: Omit<CriteriaVehicle, 'yearCode'>) {
    const { data } = await apiVehicle.get(`${criteria.vehicles}/marcas/${criteria.brand}/modelos/${criteria.model}/anos`);
    return data
  }

  static async getVehicleDetails(criteria: CriteriaVehicle) {
    const { data } = await apiVehicle.get(`${criteria.vehicles}/marcas/${criteria.brand}/modelos/${criteria.model}/anos/${criteria.yearCode}`);
    return data
  }
}

