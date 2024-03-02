import { radiationMonitorPm5000b10 } from './vehicle/radiation-monitor-pm5000b-10';
import { radiationMonitorPm5000b05 } from './vehicle/radiation-monitor-pm5000b-05';
import { radiationMonitorPm5000b01 } from './vehicle/radiation-monitor-pm5000b-01';
import { radiationMonitorPm5000b09 } from './vehicle/radiation-monitor-pm5000b-09';
import { radiationMonitorPm5000b13 } from './vehicle/radiation-monitor-pm5000b-13';
import { radiationMonitorPm5000b14 } from './vehicle/radiation-monitor-pm5000b-14';
import { radiationMonitorPm5000b16 } from './vehicle/radiation-monitor-pm5000b-16';

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
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-01/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
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
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-05/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000b-09',
    name: 'Установка радиационного контроля УРК-PM5000B-09',
    path: 'radiation-monitor-pm5000b-09',
    code: 'УРК-PM5000B-09',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/nk0hq8e404xqt6jpmgmwyao8njb8h1bj.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/dwlpeuzv9o11vz1408aiar6li7e0jrsh.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/if5q96vzovrvfcjp22gy2zy2iw7dnozl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/images/1l3nqj37hkjo5f3x5y2ugh24n3p11t5b.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b09().shortDescription,
    fullDescription: radiationMonitorPm5000b09().fullDescription,
    sliderDescription: '',

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b09().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b09().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-09/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
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
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-10/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
      ],
    }),
  },

  {
    id: 'radiation-monitor-pm5000b-13',
    name: 'Установка радиационного контроля УРК-PM5000B-13',
    path: 'radiation-monitor-pm5000b-13',
    code: 'УРК-PM5000B-13',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/bg76p5cg16i4os3bitljxjp9xlnpb24m.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/clru47jz1gd5rkwc3mn7y7sowbi6wvjj.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/p1v05tjbfo8cyqt9hz8493irkwf6y4jn.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/dwlpeuzv9o11vz1408aiar6li7e0jrsh.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/if5q96vzovrvfcjp22gy2zy2iw7dnozl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/1l3nqj37hkjo5f3x5y2ugh24n3p11t5b.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b13().shortDescription,
    fullDescription: radiationMonitorPm5000b13().fullDescription,
    sliderDescription: '',

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b13().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b13().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-13/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000b-14',
    name: 'Установка радиационного контроля УРК-PM5000B-14',
    path: 'radiation-monitor-pm5000b-14',
    code: 'УРК-PM5000B-14',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/rbbmei7v2txbvrycwuccr3hpo1ruwf1o.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/eiw0jwc5bk9fgumewkbztu6uuigs3g2a.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/2vnv61u09nw3rfjz7lyp1whkbo0a1jdl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/g7wso9zm0wthvrvgk8a5hszvhuqi7lgl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/dwlpeuzv9o11vz1408aiar6li7e0jrsh.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/if5q96vzovrvfcjp22gy2zy2iw7dnozl.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/images/1l3nqj37hkjo5f3x5y2ugh24n3p11t5b.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b14().shortDescription,
    fullDescription: radiationMonitorPm5000b14().fullDescription,
    sliderDescription: '',

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b14().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b14().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-14/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
      ],
    }),
  },
  {
    id: 'radiation-monitor-pm5000b-16',
    name: 'Установка радиационного контроля УРК-PM5000B-16',
    path: 'radiation-monitor-pm5000b-16',
    code: 'УРК-PM5000B-14',
    images: [
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/dxpqvj6py5lxext1kjcmvztoo9q91m8t.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/jsijarxfv1cswkv773twdt6c9gilugx7.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/3toz3xw7u7zwa8f7crjc5f6w80or9e2f.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/edpv5chpc2t1z3a7qfd3pile9nhzdfur.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/vkama0y4ie0c3ctgatof59vy7crqpczt.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/5f4of1733fp53n2i7t8u0u8igcb3d5n3.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/tt8laspxsr21se0gosj93hfa92690mzr.webp',
      './assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/images/yce5fbhaegzvb81vpkbqjlmvsjtu40as.webp',
    ],

    status: 'Под заказ',
    shortDescription: radiationMonitorPm5000b16().shortDescription,
    fullDescription: radiationMonitorPm5000b16().fullDescription,
    sliderDescription: '',

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      radiationMonitorPm5000b16().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      radiationMonitorPm5000b16().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/radiation-portal-monitors/vehicle/radiation-monitor-pm5000b-16/promotionalMaterials/_PM5000B_PM5000B Leaflet (2024.02 RU).pdf',
      ],
    }),
  },
];
