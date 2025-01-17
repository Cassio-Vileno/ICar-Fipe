export enum EnunVehicleType {
  CAR = 'carros',
  MOTORCYCLY = 'motos',
  TRUCK = 'caminhoes',
}

const ImageVehicle = {
  [EnunVehicleType.CAR]: require('../assets/images/car.png'),
  [EnunVehicleType.MOTORCYCLY]: require('../assets/images/moto.png'),
  [EnunVehicleType.TRUCK]: require('../assets/images/caminhao.png'),
};

export function getVehicleImage(type: EnunVehicleType): any {
  return ImageVehicle[type];
}
