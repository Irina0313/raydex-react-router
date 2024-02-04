import { xRayAndGammaRadiationPersonalDosimeterRm1621a } from './PersonalDosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/index';
import { xRayAndGammaRadiationPersonalDosimeterRm1621ma } from './PersonalDosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/index';
import { xRayAndGammaRadiationPersonalDosimeterRm1621m } from './PersonalDosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/index';
import { xRayAndGammaRadiationPersonalDosimeterRm1621 } from './PersonalDosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/index';
import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from './ElectronicDosimeters';
import { electronicPersonalDosimeterPM1300 } from './PersonalDosimeters/electronic-personal-dosimeter-pm1300';
import { xRayAndGammaRadiationPersonalDosimeterPM1611 } from './PersonalDosimeters/x-ray-and-gamma-radiation-personal-dosimeter-pm1611';

export const personalDosimetrs: ProductItemType[] = [
  {
    id: 'electronic-personal-dosimeter-PM1300',
    name: 'Дозиметр индивидуальный ДКГ-PM1300',
    path: 'electronic-personal-dosimeter-PM1300',
    code: 'ДКГ-PM1300',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/1.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/2.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/3.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/4.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/5.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/images/6.webp',
    ],
    status: 'Под заказ',
    shortDescription: electronicPersonalDosimeterPM1300().shortDescription,
    fullDescription: electronicPersonalDosimeterPM1300().fullDescription,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      electronicPersonalDosimeterPM1300().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      electronicPersonalDosimeterPM1300().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/electronic-personal-dosimeter-pm1300/promotionalMaterials/_PM1300_PM1300 Leaflet (2022.11 RU).pdf',
      ],
      certificates: [
        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/380143',
          title: `ФГИС "АРШИН"`,
        },
      ],
    }),
  },
  {
    id: 'x-ray-and-gamma-radiation-personal-dosimeter-pm1611',
    name: 'Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1611',
    path: 'x-ray-and-gamma-radiation-personal-dosimeter-pm1611',
    code: 'ДКГ-PM1611',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/images/13o72sgjqdz4jy3cwxikxs0szl35mgoq.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/images/052u69ywi19128rg40t1vg1j4y2z080q.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/images/xlj9if6bpffably32hpxc46254ypo1td.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/images/8ehvq8hay2b7g1avowvqc8bhbfqx7y31.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/images/i4h9hztu0slbg1qbc9ubkgr81mnqq8q5.webp',
    ],
    status: 'Под заказ',
    shortDescription:
      xRayAndGammaRadiationPersonalDosimeterPM1611().shortDescription,
    fullDescription:
      xRayAndGammaRadiationPersonalDosimeterPM1611().fullDescription,
    sliderDescription: `Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1611
      Дозиметр предназначен для измерения индивидуального эквивалента дозы
      Hp(10) (ЭД) и мощности индивидуального эквивалента дозы Ĥp(10) (МЭД)
      непрерывного и импульсного рентгеновского и гамма-излучения.`,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      xRayAndGammaRadiationPersonalDosimeterPM1611()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      xRayAndGammaRadiationPersonalDosimeterPM1611().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-pm1611/promotionalMaterials/_PM1611_PM1611 Leaflet (2023.08 RU).pdf',
      ],
      certificates: [
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=16483&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621',
    name: 'Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1621',
    path: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621',
    code: 'ДКГ-PM1621',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/images/0jqn971v8i1oqbncqulvuu6mxjiyi4r7.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/images/9mo1kzdhqo5sqvmeqp6h0ms5m3052610.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/images/jz90wjrz0vix9i0wlw3aufpnx9veo3sz.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/images/owygek8g1yj10e8je7kcezlwzartik4q.webp',
    ],
    status: 'Под заказ',
    shortDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621().shortDescription,
    fullDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621().fullDescription,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      xRayAndGammaRadiationPersonalDosimeterRm1621()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      xRayAndGammaRadiationPersonalDosimeterRm1621().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/promotionalMaterials/_PM1621_PM1621 Leaflet.pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/certificates/_PM1621_Сертификат_УТСИ_РБ_PM1621_до_16.03.2026.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621/certificates/_PM1621_1621_ТР_ТС_020_по_17.09.2025.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1392328',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi/view?id=11855086',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621m',
    name: 'Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1621M',
    path: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621m',
    code: 'ДКГ-PM1621M',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/images/0jqn971v8i1oqbncqulvuu6mxjiyi4r7.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/images/9mo1kzdhqo5sqvmeqp6h0ms5m3052610.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/images/jz90wjrz0vix9i0wlw3aufpnx9veo3sz.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/images/owygek8g1yj10e8je7kcezlwzartik4q.webp',
    ],
    status: 'Под заказ',
    shortDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621m().shortDescription,
    fullDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621m().fullDescription,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      xRayAndGammaRadiationPersonalDosimeterRm1621m()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      xRayAndGammaRadiationPersonalDosimeterRm1621m().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/promotionalMaterials/_PM1621_PM1621M Leaflet.pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/certificates/_PM1621_Сертификат_УТСИ_РБ_PM1621_до_16.03.2026.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m/certificates/_PM1621_1621_ТР_ТС_020_по_17.09.2025.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1392328',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13993&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma',
    name: 'Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1621MА',
    path: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma',
    code: 'ДКГ-PM1621MА',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/images/0jqn971v8i1oqbncqulvuu6mxjiyi4r7.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/images/9mo1kzdhqo5sqvmeqp6h0ms5m3052610.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/images/jz90wjrz0vix9i0wlw3aufpnx9veo3sz.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/images/owygek8g1yj10e8je7kcezlwzartik4q.webp',
    ],
    status: 'Под заказ',
    shortDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621ma().shortDescription,
    fullDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621ma().fullDescription,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      xRayAndGammaRadiationPersonalDosimeterRm1621ma()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      xRayAndGammaRadiationPersonalDosimeterRm1621ma().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/promotionalMaterials/_PM1621_PM1621M Leaflet.pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/certificates/_PM1621_Сертификат_УТСИ_РБ_PM1621_до_16.03.2026.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/certificates/_PM1621_1621_ТР_ТС_020_по_17.09.2025.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1392328',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13993&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },

  {
    id: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621a',
    name: 'Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1621А',
    path: 'x-ray-and-gamma-radiation-personal-dosimeter-rm1621a',
    code: 'ДКГ-PM1621А',
    images: [
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/images/0jqn971v8i1oqbncqulvuu6mxjiyi4r7.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/images/9mo1kzdhqo5sqvmeqp6h0ms5m3052610.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/images/jz90wjrz0vix9i0wlw3aufpnx9veo3sz.webp',
      './assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/images/owygek8g1yj10e8je7kcezlwzartik4q.webp',
    ],
    status: 'Под заказ',
    shortDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621a().shortDescription,
    fullDescription:
      xRayAndGammaRadiationPersonalDosimeterRm1621a().fullDescription,
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },
    characteristics:
      xRayAndGammaRadiationPersonalDosimeterRm1621a()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      xRayAndGammaRadiationPersonalDosimeterRm1621a().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/promotionalMaterials/_PM1621_PM1621 Leaflet.pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/certificates/_PM1621_Сертификат_УТСИ_РБ_PM1621_до_16.03.2026.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/x-ray-and-gamma-radiation-dosimeters/personalDosimetrs/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a/certificates/_PM1621_1621_ТР_ТС_020_по_17.09.2025.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1392328',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13993&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
