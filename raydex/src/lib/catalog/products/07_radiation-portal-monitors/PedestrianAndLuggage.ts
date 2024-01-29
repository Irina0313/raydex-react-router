import { radiationMonitorPm5000p } from './pedestrianAndLuggage/radiation-monitor-pm5000p/index';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const pedestrianAndLuggage: ProductItemType[] = [
  {
    id: 'radiation-monitor-pm5000p',
    name: 'Установка радиационного контроля УРК-PM5000P',
    path: 'radiation-monitor-pm5000p',
    code: 'УРК-PM5000P',
    images: [
      './assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p/images/2r1j39pd6jbje0k8r3bh9ja26yv1g0a8.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000p().shortDescription,
    fullDescription: radiationMonitorPm5000p().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics: radiationMonitorPm5000p().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000p().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p/promotionalMaterials/_PM5000P_PM5000P Leaflet.pdf',
      ],
    }),
  },
];
