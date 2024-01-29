import { gammaPersonalRadiationDetectorPm1401ma } from './PrdGamma/gamma-personal-radiation-detector-pm1401ma';
import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

/* interface TabsType {
  description?: string;
  characteristics?: string;
  docs?: string;
} */

/* export interface ProductItemType {
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
} */

export const prdGamma: ProductItemType[] = [
  {
    id: 'gamma-personal-radiation-detector-pm1401ma',
    name: 'Измеритель-сигнализатор поисковый микропроцессорный ИСП-РМ1401МА',
    path: 'gamma-personal-radiation-detector-pm1401ma',
    code: 'ИСП-РМ1401МА',
    images: [
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/wj47egrcx7xk53e38liwsech12fvd15u.png',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/c0373eaxkpjl89xp361j3232pphxq7ni.png',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/i6xssj6lkuszj3m5uy233synfnskl4jc.png',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/m8w8xsg468s8xcb8bk2lcu8qxuorejk6.png',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/q5h15fuu3jtxgoy1j0fxq19mef2djx2l.jpg',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/ty0kbnqarchssn009xidk4qzdwj2luaq.jpg',
      './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/images/wa90fk4phsrm3067nympd56fnr2hi5os.jpg',
    ],

    status: 'Под заказ',
    shortDescription: gammaPersonalRadiationDetectorPm1401ma().shortDescription,
    fullDescription: gammaPersonalRadiationDetectorPm1401ma().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      gammaPersonalRadiationDetectorPm1401ma().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      gammaPersonalRadiationDetectorPm1401ma().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/promotionalMaterials/_PM1401_PM1401 Leaflet (2023.09 EN).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/certificates/_PM1401_Сертификат_УТСИ_РБ_РМ1401К-01М_до_08.04.2027.pdf',
          title: 'Сертификат УТСИ РБ',
        },
        {
          type: 'doc',
          path: './assets/productsImages/personal-radiation-detectors/prd-gamma/gamma-personal-radiation-detector-pm1401ma/certificates/_PM1401_1401М_ТР_ТС_020_до_16.05.2023_(А).pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/530510',
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
