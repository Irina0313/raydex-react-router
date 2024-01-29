import { radiationMonitorPm5000b10 } from './vehicle/radiation-monitor-pm5000b-10/index';
import { radiationMonitorPm5000b05 } from './vehicle/radiation-monitor-pm5000b-05/index';
import { radiationMonitorPm5000b01 } from './vehicle/radiation-monitor-pm5000b-01/index';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';

interface TabsType {
  description?: string;
  characteristics?: string;
  docs?: string;
}

export interface ProductItemType {
  id: string;
  name: string;
  path: string;
  code: string;
  images: string[];

  status: string;
  shortDescription: JSX.Element | string;
  fullDescription: JSX.Element;
  sliderDescription?: string;
  tabs: TabsType;
  characteristics?: JSX.Element;
  fullCharacteristics?: JSX.Element;
  docs?: JSX.Element;
}

export const vehicle: ProductItemType[] = [
  {
    id: 'radiation-monitor-pm5000b-01',
    name: 'Установка радиационного контроля УРК-PM5000B-01',
    path: 'radiation-monitor-pm5000b-01',
    code: 'УРК-PM5000B-01',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/rbbmei7v2txbvrycwuccr3hpo1ruwf1o.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/7we3cytl471dmvhyyherc8y4td13pkjj.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/dwlpeuzv9o11vz1408aiar6li7e0jrsh.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/gqf43rfqcw5jtg3bplhg5muh66ogybf6.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/if5q96vzovrvfcjp22gy2zy2iw7dnozl.webp',

      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/images/1l3nqj37hkjo5f3x5y2ugh24n3p11t5b.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b01().shortDescription,
    fullDescription: radiationMonitorPm5000b01().fullDescription,
    sliderDescription:
      'Автоматически показывает безопасное время нахождения возле ИИИ и помогает определить безопасное расстояние! Впомощь населению и сотрудникам реагирующих структур.',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b01().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b01().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/promotionalMaterials/_PM5000B_PM5000B Leaflet.pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000b-05',
    name: 'Установка радиационного контроля УРК-PM5000B-05',
    path: 'radiation-monitor-pm5000b-05',
    code: 'УРК-PM5000B-05',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/bg76p5cg16i4os3bitljxjp9xlnpb24m.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/p1v05tjbfo8cyqt9hz8493irkwf6y4jn.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/dwlpeuzv9o11vz1408aiar6li7e0jrsh.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/if5q96vzovrvfcjp22gy2zy2iw7dnozl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/images/1l3nqj37hkjo5f3x5y2ugh24n3p11t5b.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b05().shortDescription,
    fullDescription: radiationMonitorPm5000b05().fullDescription,
    sliderDescription:
      'Автоматически показывает безопасное время нахождения возле ИИИ и помогает определить безопасное расстояние! В помощь населению и сотрудникам реагирующих структур.',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b05().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b05().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/promotionalMaterials/_PM5000B_PM5000B Leaflet.pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000b-10',
    name: 'Установка радиационного контроля УРК-PM5000B-10',
    path: 'radiation-monitor-pm5000b-10',
    code: 'УРК-PM5000B-10',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/dxpqvj6py5lxext1kjcmvztoo9q91m8t.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/edpv5chpc2t1z3a7qfd3pile9nhzdfur.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/d8fww48vh72qcqvru7861ttouvpn0kuy.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/5f4of1733fp53n2i7t8u0u8igcb3d5n3.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/jsijarxfv1cswkv773twdt6c9gilugx7.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/low5q1utthol3gw1ihoydmt1jmipkno7.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/tt8laspxsr21se0gosj93hfa92690mzr.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/vkama0y4ie0c3ctgatof59vy7crqpczt.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b10().shortDescription,
    fullDescription: radiationMonitorPm5000b10().fullDescription,
    sliderDescription: '',

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b10().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b10().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/promotionalMaterials/_PM5000B_PM5000B Leaflet.pdf',
      ],
    }),
  },
];
