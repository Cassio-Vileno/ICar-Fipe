import axios from 'axios';

const apiVehicle = axios.create({
  baseURL: process.env.API_URL_VEHICLE,
  timeout: 23000,
  timeoutErrorMessage: 'Não foi possivel se conectar com servidor',
});

export default apiVehicle;
