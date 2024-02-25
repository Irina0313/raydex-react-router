import { radiationMonitorPm5000p03b } from './pedestrianAndLuggage/radiation-monitor-pm5000p-03b/index';
import { radiationMonitorPm5000p02b } from './pedestrianAndLuggage/radiation-monitor-pm5000p-02b/index';
import { radiationMonitorPm5000p01 } from './pedestrianAndLuggage/radiation-monitor-pm5000p-01/index';
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
    sliderDescription:
      'Высокочувствительная установка радиационного контроля предназначена для обнаружения радиоактивных и ядерных материалов при контроле пешеходов и багажа на различных пунктах пропуска. Установка успешно обнаруживает загрязнение радиоактивными веществами одежды, обуви и кожных покровов персонала предприятий.',
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
  {
    id: 'radiation-monitor-pm5000p-01',
    name: 'Установка радиационного контроля УРК-PM5000P-01',
    path: 'radiation-monitor-pm5000p-01',
    code: 'УРК-PM5000P-01',
    images: [
      './assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-01/images/8wktwyonlwvr81y7k3ggi6n16l645j68.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000p01().shortDescription,
    fullDescription: radiationMonitorPm5000p01().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000p01().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000p01().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-01/promotionalMaterials/_PM5000P_PM5000P Leaflet.pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000p-02b',
    name: 'Установка радиационного контроля УРК-PM5000P-02B',
    path: 'radiation-monitor-pm5000p-02b',
    code: 'УРК-PM5000P-02B',
    images: [
      './assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-02b/images/0t3iul4vzp2h7t9q340d43qkqd358rcv.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000p02b().shortDescription,
    fullDescription: radiationMonitorPm5000p02b().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000p02b().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000p02b().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-02b/promotionalMaterials/_PM5000P_PM5000P Leaflet.pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000p-03b',
    name: 'Установка радиационного контроля УРК-PM5000P-03B',
    path: 'radiation-monitor-pm5000p-03b',
    code: 'УРК-PM5000P-03B',
    images: [
      './assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-03b/images/megbwd6l9vzxv799mw9omwku32vhm4df.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000p03b().shortDescription,
    fullDescription: radiationMonitorPm5000p03b().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000p03b().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000p03b().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/pedestrian-and-luggage/radiation-monitor-pm5000p-03b/promotionalMaterials/_PM5000P_PM5000P Leaflet.pdf',
      ],
    }),
  },
];
