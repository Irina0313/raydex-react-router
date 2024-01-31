import { wristGammaDosimeterTm1603a } from './ElectronicDosimeters/wrist-gamma-dosimeter-rm1603a';
import { electronicDosimeterPm1211 } from './ElectronicDosimeters/electronic-dosimeter-pm1211';
import { wristGammaDosimeterRM1603b } from './ElectronicDosimeters/wrist-gamma-dosimeter-rm1603b';

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

export const electronicDosimetrs: ProductItemType[] = [
  {
    id: 'electronic-dosimeter-pm1211',
    name: 'Дозиметр гамма-излучения ДКГ-PM1211',
    path: 'electronic-dosimeter-pm1211',
    code: 'ДКГ-PM1211',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/images/60kzds2bxooglpwdzu80kcirw3820t53.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/images/gasivv8wwr2l6b5mhh5303q5qhjxh9u6.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/images/ng6qhtsd8c1189u0eoxy97yes2ahf6mu.webp',
    ],

    status: 'Под заказ',
    shortDescription: electronicDosimeterPm1211().shortDescription,
    fullDescription: electronicDosimeterPm1211().fullDescription,
    sliderDescription:
      'Автоматически показывает безопасное время нахождения возле ИИИ и помогает определить безопасное расстояние! Впомощь населению и сотрудникам реагирующих структур.',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      electronicDosimeterPm1211().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      electronicDosimeterPm1211().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/promotionalMaterials/_PM1211_PM1211 Leaflet (2022.11 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_Сертификат_УТСИ_РБ_РМ1211_до_30.01.2025.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_1211_ТР_ТС_020_до_03.06.2026.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_1211_ТР_BY_024_до_03.06.2026.pdf',
          title: 'Сертификат ТР BY',
        },
        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1394743',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13161&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'wrist-gamma-dosimeter-rm1603b',
    name: 'Дозиметр гамма-излучения наручный ДКГ-РМ1603B',
    path: 'wrist-gamma-dosimeter-rm1603b',
    code: 'ДКГ-РМ1603B',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/images/st288s81menw976i704wfpm808hm8uwu.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/images/eznyz3e8dva76t8r0t6sysegfgbwslt5.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/images/7r9ie50b582vfu1vzxez6a3yt1wczet1.webp',
    ],

    status: 'Под заказ',
    shortDescription: wristGammaDosimeterRM1603b().shortDescription,
    fullDescription: wristGammaDosimeterRM1603b().fullDescription,
    sliderDescription: `Дозиметр гамма-излучения наручный ДКГ-РМ1603B Миниатюрный
    профессиональный дозиметр предназначен для осуществления непрерывного
    круглосуточного контроля радиационной обстановки.`,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      wristGammaDosimeterRM1603b().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      wristGammaDosimeterRM1603b().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/promotionalMaterials/_PM1603_PM1603 Leaflet (2022.11 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/certificates/_PM1211_Сертификат_УТСИ_РБ_РМ1211_до_30.01.2025.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603b/certificates/_PM1603_1603_ТР_ТС_до_11.07.2023.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/530511',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=16750&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },

  {
    id: 'wrist-gamma-dosimeter-rm1603a',
    name: 'Дозиметр гамма-излучения наручный ДКГ-РМ1603А',
    path: 'wrist-gamma-dosimeter-rm1603a',
    code: 'ДКГ-РМ1603А',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/images/st288s81menw976i704wfpm808hm8uwu.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/images/eznyz3e8dva76t8r0t6sysegfgbwslt5.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/images/7r9ie50b582vfu1vzxez6a3yt1wczet1.webp',
    ],

    status: 'Под заказ',
    shortDescription: wristGammaDosimeterTm1603a().shortDescription,
    fullDescription: wristGammaDosimeterTm1603a().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      wristGammaDosimeterTm1603a().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      wristGammaDosimeterTm1603a().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/promotionalMaterials/_PM1603_PM1603 Leaflet.pdf ',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/certificates/_PM1603_Сертификат_УТСИ_РБ_PM1603_до_31.05.2023.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/electronicDosimetrs/wrist-gamma-dosimeter-rm1603a/certificates/_PM1603_1603_ТР_ТС_до_11.07.2023.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/530511',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=16750&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
