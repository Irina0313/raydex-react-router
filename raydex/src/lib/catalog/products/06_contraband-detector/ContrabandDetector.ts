import { contrabandDetectorPm2030 } from './contraband-detector-pm2030/index';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const contrabandDetector: ProductItemType[] = [
  {
    id: 'contraband-detector-pm2030',
    name: 'Устройство поиска неоднородностей плотности вещества УПН-PM2030',
    path: 'contraband-detector-pm2030',
    code: 'УПН-PM2030',
    images: [
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/0z204jcudbobue06f53uu80e9tg0kml4.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/0bdsmfsog4pyc8avewtty3x3466o7phh.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/1e6s8mgg6iwere81kv34d02y5w16g8wd.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/5d67duo7k72w9l0dkd8tgk0wu9gmenji.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/ajui0o0cn9gk8yfz7ia1210v7jo337t1.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/c93jfz0guu7x70op87qbx8ee8umk9811.webp',
      './assets/productsImages/contraband-detector/contraband-detector-pm2030/images/f7vgig8i7afhslpielsuq3119rkuly7w.webp',
    ],

    status: 'Под заказ',
    shortDescription: contrabandDetectorPm2030().shortDescription,
    fullDescription: contrabandDetectorPm2030().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics: contrabandDetectorPm2030().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      contrabandDetectorPm2030().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/contraband-detector/contraband-detector-pm2030/promotionalMaterials/_PM2012M_PM2012 Leaflet (2023.09 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/contraband-detector/contraband-detector-pm2030/certificates/_PM2030_2030_ТР_ТС_020_до_28.03.2027.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/contraband-detector/contraband-detector-pm2030/certificates/_PM2030_2030_ТР_BY_024_до_28.03.2027.pdf',
          title: 'Сертификат ТР BY',
        },
      ],
    }),
  },
];
