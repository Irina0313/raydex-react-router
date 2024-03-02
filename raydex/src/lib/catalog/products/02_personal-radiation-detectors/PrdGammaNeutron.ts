import { personalRadiationDetectorPm1401k01m } from './PrdGammaNeutron/personal-radiation-detector-pm1401k-01m';
import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const prdGammaNeutron: ProductItemType[] = [
  {
    id: 'personal-radiation-detector-pm1401k-01m',
    name: 'Измеритель-сигнализатор поисковый ИСП-PM1401K-01М',
    path: 'personal-radiation-detector-pm1401k-01m',
    code: 'ИСП-PM1401K-01М',
    images: [
      './assets/productsImages/personal-radiation-detectors/prd-gamma-neutron/personal-radiation-detector-pm1401k-01m/images/ykc19e128llvaeklxifyg8x0fhceqz87.webp',
      './assets/productsImages/personal-radiation-detectors/prd-gamma-neutron/personal-radiation-detector-pm1401k-01m/images/d8up7zfqa73ktj86evlcm46ym5n3mz0y.webp',
    ],

    status: 'Под заказ',
    shortDescription: personalRadiationDetectorPm1401k01m().shortDescription,
    fullDescription: personalRadiationDetectorPm1401k01m().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      personalRadiationDetectorPm1401k01m().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      personalRadiationDetectorPm1401k01m().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        './assets/productsImages/personal-radiation-detectors/prd-gamma-neutron/personal-radiation-detector-pm1401k-01m/promotionalMaterials/_PM1401_PM1401 Leaflet (2023.09 RU).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: './assets/productsImages/personal-radiation-detectors/prd-gamma-neutron/personal-radiation-detector-pm1401k-01m/certificates/_PM1401_Сертификат_УТСИ_РБ_РМ1401К-01М_до_08.04.2027.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: './assets/productsImages/personal-radiation-detectors/prd-gamma-neutron/personal-radiation-detector-pm1401k-01m/certificates/_PM1401_1401К-01_ТР_ТС_020_до_17.08.2027.pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/332863',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=14999&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
