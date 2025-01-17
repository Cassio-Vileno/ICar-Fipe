import { CrieteriaModels } from '../types/models';
import apiVehicle from './carApi.fetch.service';

export class ModelsService {
  static async getAll(criteria: Omit<CrieteriaModels, 'yearId'>) {
    const { data } = await apiVehicle.get(`${criteria.vehicles}/marcas/${criteria.id}/modelos`);
    return data
  }
}

