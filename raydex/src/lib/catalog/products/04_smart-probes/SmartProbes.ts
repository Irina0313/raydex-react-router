import { alphaBetaRadiationDetectorBdabForPm1403 } from './alpha-beta-radiation-detector-bdab-for-pm1403/index';
import { neutronRadiationDetectorBdnForPm1403 } from './neutron-radiation-detector-bdn-for-pm1403/index';
import { gammaRadiationDetectionUnitBdg2ForPm1403 } from './gamma-radiation-detection-unit-bdg2-for-pm1403';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const smartProbes: ProductItemType[] = [
  {
    id: 'gamma-radiation-detection-unit-bdg2-for-pm1403',
    name: 'Блок детектирования гамма-излучения БДГ2-PM1403',
    path: 'gamma-radiation-detection-unit-bdg2-for-pm1403',
    code: 'БДГ2-PM1403',
    images: [
      './assets/productsImages/smart-probes/gamma-radiation-detection-unit-bdg2-for-pm1403/images/gpw9md3q6zz1awhuv08d5eomvoacymkg.png',
      './assets/productsImages/smart-probes/gamma-radiation-detection-unit-bdg2-for-pm1403/images/66zlgiwciqcbfuaaqmec5flhx7c5518j.png',
      './assets/productsImages/smart-probes/gamma-radiation-detection-unit-bdg2-for-pm1403/images/dyypzmmafjzo7a5weq0oz1kwjuc6jh4h.png',
    ],

    status: 'Под заказ',
    shortDescription:
      gammaRadiationDetectionUnitBdg2ForPm1403().shortDescription,
    fullDescription: gammaRadiationDetectionUnitBdg2ForPm1403().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      gammaRadiationDetectionUnitBdg2ForPm1403()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      gammaRadiationDetectionUnitBdg2ForPm1403().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/smart-probes/gamma-radiation-detection-unit-bdg2-for-pm1403/promotionalMaterials/_PM1403_PM1403 Leaflet (2023.07 EN).pdf',
      ],
    }),
  },

  {
    id: 'neutron-radiation-detector-bdn-for-pm1403',
    name: 'Блок детектирования нейтронного излучения БДН-PM1403',
    path: 'neutron-radiation-detector-bdn-for-pm1403',
    code: 'БДН-PM1403',
    images: [
      './assets/productsImages/smart-probes/neutron-radiation-detector-bdn-for-pm1403/images/kp8wijto6y6zfkmx6pus52hg9he9rnbx.webp',
      './assets/productsImages/smart-probes/neutron-radiation-detector-bdn-for-pm1403/images/66zlgiwciqcbfuaaqmec5flhx7c5518j.webp',
      './assets/productsImages/smart-probes/neutron-radiation-detector-bdn-for-pm1403/images/dyypzmmafjzo7a5weq0oz1kwjuc6jh4h.webp',
    ],

    status: 'Под заказ',
    shortDescription: neutronRadiationDetectorBdnForPm1403().shortDescription,
    fullDescription: neutronRadiationDetectorBdnForPm1403().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      neutronRadiationDetectorBdnForPm1403().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      neutronRadiationDetectorBdnForPm1403().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/smart-probes/neutron-radiation-detector-bdn-for-pm14033/promotionalMaterials/_PM1403_PM1403 Leaflet (2023.07 EN).pdf',
      ],
    }),
  },

  {
    id: 'alpha-beta-radiation-detector-bdab-for-pm1403',
    name: 'Блок детектирования альфа- бета- излучений БДАБ-PM1403',
    path: 'alpha-beta-radiation-detector-bdab-for-pm1403',
    code: 'БДАБ-PM1403',
    images: [
      './assets/productsImages/smart-probes/alpha-beta-radiation-detector-bdab-for-pm1403/images/hsbmshg0zz66gfnl9jilhxctl24xkh59.jpg',
      './assets/productsImages/smart-probes/alpha-beta-radiation-detector-bdab-for-pm1403/images/66zlgiwciqcbfuaaqmec5flhx7c5518j.png',
      './assets/productsImages/smart-probes/alpha-beta-radiation-detector-bdab-for-pm1403/images/dyypzmmafjzo7a5weq0oz1kwjuc6jh4h.png',
    ],

    status: 'Под заказ',
    shortDescription:
      alphaBetaRadiationDetectorBdabForPm1403().shortDescription,
    fullDescription: alphaBetaRadiationDetectorBdabForPm1403().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      alphaBetaRadiationDetectorBdabForPm1403().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      alphaBetaRadiationDetectorBdabForPm1403().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/smart-probes/alpha-beta-radiation-detector-bdab-for-pm1403/promotionalMaterials/_PM1403_PM1403 Leaflet (2023.07 EN).pdf',
      ],
    }),
  },
];
