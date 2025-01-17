export enum IconType {
  BRAND = 'brand',
  FUEL = 'fuel',
  YEAR = 'year',
  CODE = 'code',
}

const IconDetailModel = {
  [IconType.BRAND]: require('../assets/icons/registrado.png'),
  [IconType.FUEL]: require('../assets/icons/fuel.png'),
  [IconType.YEAR]: require('../assets/icons/calenda.png'),
  [IconType.CODE]: require('../assets/icons/qrCode.png'),
};

export function getIconDetailModel(type: IconType): any {
  return IconDetailModel[type];
}
