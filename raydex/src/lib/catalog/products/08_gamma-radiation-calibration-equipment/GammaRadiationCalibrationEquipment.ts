import { automaticIrradiationCalibrationSystemPm9200 } from './automatic-irradiation-calibration-system-pm9200/index';
//import { automaticIrradiationCalibrationSystemPm9101 } from './automatic-irradiation-calibration-system-pm9101/index';
import { automaticIrradiationCalibrationSystemPm9100 } from './automatic-irradiation-calibration-system-pm9100/index';
import { pm9300 } from './pm9300';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const gammaRadiationCalibrationEquipment: ProductItemType[] = [
  {
    id: 'automatic-irradiation-calibration-system-pm9100',
    name: 'Установка дозиметрическая гамма-излучения автоматизированная УДГА-РМ9100',
    path: 'automatic-irradiation-calibration-system-pm9100',
    code: 'УДГА-РМ9100',
    images: [
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/images/7t9uhzfk36f02u31659isf5kmz4usoq9.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/images/ea0ex7ccz3xmhlkkfirnzzo48y29050e.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/images/m8mfjl75lrbv2mvkfv4vmclz9b11numj.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/images/pyrebhll3ldsx6b2vo3p6mn6emz5ekdv.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      automaticIrradiationCalibrationSystemPm9100().shortDescription,
    fullDescription:
      automaticIrradiationCalibrationSystemPm9100().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      automaticIrradiationCalibrationSystemPm9100()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      automaticIrradiationCalibrationSystemPm9100().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/promotionalMaterials/_PM9100_PM9100 Leaflet (2022.11 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9100/certificates/_PM9100_9100_ТР_ТС_004,_020_до_28.09.2026.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1407959',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13593&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  /* {
    id: 'automatic-irradiation-calibration-system-pm9101',
    name: 'Установка дозиметрическая гамма-излучения автоматизированная УДГА-РМ9101',
    path: 'automatic-irradiation-calibration-system-pm9101',
    code: 'УДГА-РМ9101',
    images: [
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/images/7t9uhzfk36f02u31659isf5kmz4usoq9.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/images/ea0ex7ccz3xmhlkkfirnzzo48y29050e.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/images/m8mfjl75lrbv2mvkfv4vmclz9b11numj.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/images/pyrebhll3ldsx6b2vo3p6mn6emz5ekdv.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      automaticIrradiationCalibrationSystemPm9101().shortDescription,
    fullDescription:
      automaticIrradiationCalibrationSystemPm9101().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      automaticIrradiationCalibrationSystemPm9101()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      automaticIrradiationCalibrationSystemPm9101().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/promotionalMaterials/_PM9100_PM9100 Leaflet.pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/certificates/_PM9100_9100_ТР_ТС_004,_020_до_28.09.2026.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/381616',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13593&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  }, */
  {
    id: 'automatic-irradiation-calibration-system-pm9200',
    name: 'Установка радиационная поверочная нейтронного излучения серии УРПН-РМ9200',
    path: 'automatic-irradiation-calibration-system-pm9200',
    code: 'УРПН-РМ9200',
    images: [
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/qhhn8l8rcwktfapxaso3br6bwji62tav.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/2qzl5h8scfu12192spovsh3vp2yteu1j.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/x0m4h6i0xhba5fh4da0vti9os3n8bew8.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/lm2qeyu5uck3k08bwalg0ksofhvz1ka1.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/iqhiuf4v9jnybf3r38rtpmyyihb142t7.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/8ets28cv9oj17jb7yt5wrcb2ca9wxuw3.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/images/g03vnr4zge1sx78lf15n7lpzdm04fszm.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      automaticIrradiationCalibrationSystemPm9200().shortDescription,
    fullDescription:
      automaticIrradiationCalibrationSystemPm9200().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      automaticIrradiationCalibrationSystemPm9200()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      automaticIrradiationCalibrationSystemPm9200().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/promotionalMaterials/_PM9200_PM9200 Leaflet (2022.11 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9200/certificates/_PM9200_PM9200 TP TC Declaration.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1404201',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=15472&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'pm9300',
    name: 'Установка радиационная поверочная гамма-излучения закрытая УРПГЗ-РМ9300',
    path: 'pm9300',
    code: 'УРПГЗ-РМ9300',
    images: [
      './assets/productsImages/gamma-radiation-calibration-equipment/pm9300/images/krd0gmtpm7mif19klre24b8s3fw09m4p.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/pm9300/images/cx6bsb8p0e151z4rvs1mf8t2pxwqgchs.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/pm9300/images/3ucde6gmh61yuat5o6ixwq088phkz2gk.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/pm9300/images/881zx610wtmxtan9b6cokbj8alid65tx.webp',
      './assets/productsImages/gamma-radiation-calibration-equipment/pm9300/images/qjbp2mtp7pdjz1gyyxl5y40tq3u3595n (1).webp',
    ],

    status: 'Под заказ',
    shortDescription: pm9300().shortDescription,
    fullDescription: pm9300().fullDescription,
    sliderDescription: '',
    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics: pm9300().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(pm9300().characteristics),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/gamma-radiation-calibration-equipment/pm9300/_PM9300_PM9300 Leaflet (2024.02 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/gamma-radiation-calibration-equipment/pm9300/certificates/_PM9300_PM9300 TP TC Declaration.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=17136&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
