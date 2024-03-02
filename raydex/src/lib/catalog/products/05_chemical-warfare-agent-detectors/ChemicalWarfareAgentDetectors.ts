import { combinedChemicalAgentAndGammaRadiationDetectorPm2012mb } from './combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/index';
import { combinedChemicalAgentAndGammaRadiationDetectorPm2012m } from './combined-chemical-agent-and-gamma-radiation-detector-pm2012m/index';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const chemicalWarfareAgentDetectors: ProductItemType[] = [
  {
    id: 'combined-chemical-agent-and-gamma-radiation-detector-pm2012m',
    name: 'Дозиметр гамма-излучения с функцией обнаружения паров токсичных веществ ДКГ-РМ2012М',
    path: 'combined-chemical-agent-and-gamma-radiation-detector-pm2012m',
    code: 'ДКГ-РМ2012М',
    images: [
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/images/idjtz89z66hkripejs44sn2t1xkbrjtv.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/images/7win1lxolrqb0bwuyv3p9i7qs97njpis.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/images/fkq0976b7imqkzz3lufp4zg91i3yj59o.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/images/hyphaopdt5bproipguyaac7nynzf0dpx.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012m().shortDescription,
    fullDescription:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012m().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012m()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      combinedChemicalAgentAndGammaRadiationDetectorPm2012m().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/promotionalMaterials/_PM2012M_PM2012 Leaflet (2023.09 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_Сертификат_УТСИ_РБ_РМ2012М_до_28.08.2025.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_2012М_ТР_ТС_004,_020_до_29.04.2025.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_2012М_ТР_BY_024_до_30.04.2025.pdf',
          title: 'Сертификат ТР BY',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1394746',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13671&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
  {
    id: 'combined-chemical-agent-and-gamma-radiation-detector-pm2012mb',
    name: 'Дозиметр гамма-излучения с функцией обнаружения паров токсичных веществ ДКГ-РМ2012МВ',
    path: 'combined-chemical-agent-and-gamma-radiation-detector-pm2012mb',
    code: 'ДКГ-РМ2012МВ',
    images: [
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/images/idjtz89z66hkripejs44sn2t1xkbrjtv.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/images/7win1lxolrqb0bwuyv3p9i7qs97njpis.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/images/fkq0976b7imqkzz3lufp4zg91i3yj59o.webp',
      './assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/images/hyphaopdt5bproipguyaac7nynzf0dpx.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012mb().shortDescription,
    fullDescription:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012mb().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      combinedChemicalAgentAndGammaRadiationDetectorPm2012mb()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      combinedChemicalAgentAndGammaRadiationDetectorPm2012mb().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012mb/promotionalMaterials/_PM2012M_PM2012 Leaflet (2023.09 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_Сертификат_УТСИ_РБ_РМ2012М_до_28.08.2025.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_2012М_ТР_ТС_004,_020_до_29.04.2025.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'doc',
          path: '../../../assets/productsImages/chemical-warfare-agent-detectors/combined-chemical-agent-and-gamma-radiation-detector-pm2012m/certificates/_PM2012M_2012М_ТР_BY_024_до_30.04.2025.pdf',
          title: 'Сертификат ТР BY',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1394746',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13671&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
