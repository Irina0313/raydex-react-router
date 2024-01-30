import { gammaRadiationCalibrationEquipment } from './products/08_gamma-radiation-calibration-equipment/GammaRadiationCalibrationEquipment';
import { pedestrianAndLuggage } from './products/07_radiation-portal-monitors/PedestrianAndLuggage';
import { contrabandDetector } from './products/06_contraband-detector/ContrabandDetector';
import {
  electronicDosimetrs,
  ProductItemType,
} from './products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';
import { personalDosimetrs } from './products/01_XRayAndGammaRadiationDosimeters/PersonalDosimeters';
import { prdGamma } from './products/02_personal-radiation-detectors/PrdGamma';
import { radionuclideIdentificationDevices } from './products/03_radionuclideIdentificationDevices/RadionuclideIdentificationDevices';
import { smartProbes } from './products/04_smart-probes/SmartProbes';
import { chemicalWarfareAgentDetectors } from './products/05_chemical-warfare-agent-detectors/ChemicalWarfareAgentDetectors';
import { vehicle } from './products/07_radiation-portal-monitors/Vehicle';

interface IProductsListItem {
  id: string;
  value: ProductItemType[];
}

export const productsList: IProductsListItem[] = [
  {
    id: 'electronicDosimetrs',
    value: electronicDosimetrs,
  },
  {
    id: 'personalDosimetrs',
    value: personalDosimetrs,
  },
  /*  {
    id: 'prdGammaNeutron',
    value: prdGammaNeutron,
  }, */
  {
    id: 'prdGamma',
    value: prdGamma,
  },
  {
    id: 'radionuclideIdentificationDevices',
    value: radionuclideIdentificationDevices,
  },
  {
    id: 'smartProbes',
    value: smartProbes,
  },
  {
    id: 'chemicalWarfareAgentDetectors',
    value: chemicalWarfareAgentDetectors,
  },
  {
    id: 'contrabandDetector',
    value: contrabandDetector,
  },
  {
    id: 'vehicle',
    value: vehicle,
  },
  {
    id: 'pedestrianAndLuggage',
    value: pedestrianAndLuggage,
  },
  {
    id: 'gammaRadiationCalibrationEquipment',
    value: gammaRadiationCalibrationEquipment,
  },
];
export interface CatalogItemType {
  id: string;
  path: string;
  name: string;
  subcategory?: CatalogItemType[];
  productsID?: string;
}

export const catalog: CatalogItemType[] = [
  {
    id: '1',
    path: 'x-ray-and-gamma-radiation-dosimeters',
    name: 'Дозиметры рентгеновского и гамма-излучения',
    subcategory: [
      {
        id: 'sub1',
        path: 'electronic-dosimeters',
        name: 'Электронные дозиметры',
        productsID: 'electronicDosimetrs',
      },
      {
        id: 'sub2',
        path: 'personal-dosimeters',
        name: 'Индивидуальные дозиметры',
        productsID: 'personalDosimetrs',
      },
    ],
  },
  {
    id: '2',
    path: 'personal-radiation-detectors',
    name: 'Поисковые приборы радиационного контроля',
    subcategory: [
      /* {
        id: 'sub3',
        path: 'prd-gamma-neutron',
        name: 'Поисковые приборы гамма и нейтронного излучения',
        productsID: 'prdGammaNeutron',
      }, */
      {
        id: 'sub4',
        path: 'prd-gamma',
        name: 'Поисковые приборы гамма-излучения',
        productsID: 'prdGamma',
      },
    ],
  },
  {
    id: '3',
    path: 'radiation-portal-monitors',
    name: 'Радиационные портальные мониторы',
    subcategory: [
      {
        id: 'sub5',
        path: 'vehicle',
        name: 'Транспортные мониторы',
        productsID: 'vehicle',
      },
      {
        id: 'sub6',
        path: 'pedestrianAndLuggage',
        name: 'Пешеходные и багажные мониторы',
        productsID: 'pedestrianAndLuggage',
      },
    ],
  },
  {
    id: '4',
    path: 'radionuclide-identification-devices',
    name: 'Идентификаторы радиоизотопов',
    productsID: 'radionuclideIdentificationDevices',
  },
  {
    id: '5',
    path: 'smart-probes',
    name: 'Интеллектуальные блоки детектирования',
    productsID: 'smartProbes',
  },
  {
    id: '6',
    path: 'contamination-measurement-monitors',
    name: 'Радиометры для контроля загрязненности',
    subcategory: [],
  },
  {
    id: '7',
    path: 'contraband-detector',
    name: 'Детектор контрабанды',
    productsID: 'contrabandDetector',
  },
  {
    id: '8',
    path: 'chemical-warfare-agent-detectors',
    name: 'Приборы радиационно-химической разведки',
    productsID: 'chemicalWarfareAgentDetectors',
  },
  {
    id: '9',
    path: 'radiation-monitoring-system',
    name: 'Автоматизированная система радиационного контроля',
    subcategory: [],
  },
  {
    id: '10',
    path: 'gamma-radiation-calibration-equipment',
    name: 'Поверочные установки гамма и нейтронного излучения',
    productsID: 'gammaRadiationCalibrationEquipment',
  },
  {
    id: '11',
    path: 'system-software',
    name: 'Системное программное обеспечение',
    subcategory: [],
  },
];
