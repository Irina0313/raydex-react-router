import { gammaRadiationDetectorBdg3ForPm1403 } from './gamma-radiation-detector-bdg3-for-pm1403/index';
import { multipurposeHandHeldRadiationMonitorIdentifierPm1401k33 } from './multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3';
import { displayAndControlUnitPm1403 } from './display-and-control-unit-pm1403';

import getFullCharacteristics from '../../../../utils/getFullCharacteristics';
import getDocs from '../../../../utils/getDocs';
import { ProductItemType } from '../01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const radionuclideIdentificationDevices: ProductItemType[] = [
  {
    id: 'multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3',
    name: 'Дозиметр-радиометр поисковый МКС-РМ1401К-3',
    path: 'multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3',
    code: 'МКС-РМ1401К-3',
    images: [
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/60dp3wn69kg92z64mz48e1sd6xxm4drd.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/blqt7yd7sgg453aqm876d6d3gb51g5zg.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/weusjchyyyalkb3lwj1gvkc0reewv897.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/2pvgojycszl7vnwbbsrsca2qozvmtnbh.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/ci60i7vco0z51ef4p4897j1i25rrqfo7.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/eznyz3e8dva76t8r0t6sysegfgbwslt5.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/jq1xtoqvxgrn7eno2wj93415nz4whnp6.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/putr0nglddcu52xs049zfe3jv1wpld89.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/tvuxkcbxawjc5x6ucva3aaco1r6fuai0.webp',
      './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/images/wz4n3eo4dehzywnau8bo03c42o53wcu7.webp',
    ],

    status: 'Под заказ',
    shortDescription:
      multipurposeHandHeldRadiationMonitorIdentifierPm1401k33()
        .shortDescription,
    fullDescription:
      multipurposeHandHeldRadiationMonitorIdentifierPm1401k33().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      multipurposeHandHeldRadiationMonitorIdentifierPm1401k33()
        .characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      multipurposeHandHeldRadiationMonitorIdentifierPm1401k33().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/promotionalMaterials/_PM1401K-3_PM1401К-3 Leaflet (2023.10 EN).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: './assets/productsImages/radionuclide-identification-devices/multipurpose-hand-held-radiation-monitor-identifier-pm1401k-3/certificates/_PM1401_1401K_ТР_ТС_020_до_26.01.2025_(-3,_-3Е,_-3А,-3М,-3Р).pdf',
          title: 'Сертификат ТР ТС',
        },

        {
          type: 'link',
          path: 'https://fgis.gost.ru/fundmetrology/registry/4/items/1408519',
          title: `ФГИС "АРШИН"`,
        },
        {
          type: 'link',
          path: 'https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=16098&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=',
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },

  {
    id: 'display-and-control-unit-pm1403',
    name: 'Блок отображения информации БОИ PM-1403',
    path: 'display-and-control-unit-pm1403',
    code: 'БОИ PM-1403',
    images: [
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/mxkybofam5umiojm86x969fwrx78ixqv.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/66zlgiwciqcbfuaaqmec5flhx7c5518j.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/dyypzmmafjzo7a5weq0oz1kwjuc6jh4h.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/vudfknw7hzg8l1tj105rmkk36qg0aeky.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/0yfegymawli0rfzzk0gpkh95q0l4x98f.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/3ix9q1zu60hetlcwhtx081lea4mv6kos.webp',
      './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/images/esm57k4bqrh64s48lwn6hdd0knnli4o0.webp',
    ],

    status: 'Под заказ',
    shortDescription: displayAndControlUnitPm1403().shortDescription,
    fullDescription: displayAndControlUnitPm1403().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      displayAndControlUnitPm1403().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      displayAndControlUnitPm1403().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/promotionalMaterials/_PM1403_PM1403 Leaflet (2023.07 EN).pdf',
      ],
      certificates: [
        {
          type: 'doc',
          path: './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/certificates/_PM1403_1403_ТР_ТС_004_020_до_29.10.2024.pdf',
          title: 'Сертификат ТР ТС',
        },
        {
          type: 'doc',
          path: './assets/productsImages/radionuclide-identification-devices/display-and-control-unit-pm1403/certificates/_PM1403_1403_ТР_BY_024_до_30.10.2024.pdf',
          title: 'Сертификат ТР BY',
        },
      ],
    }),
  },

  {
    id: 'gamma-radiation-detector-bdg3-for-pm1403',
    name: 'Блок детектирования гамма-излучения БДГ3-PM1403',
    path: 'gamma-radiation-detector-bdg3-for-pm1403',
    code: 'БДГ3-PM1403',
    images: [
      './assets/productsImages/radionuclide-identification-devices/gamma-radiation-detector-bdg3-for-pm1403/images/6tbsi5r6dg30u3gns3yfbhjruig17yui.webp',
      './assets/productsImages/radionuclide-identification-devices/gamma-radiation-detector-bdg3-for-pm1403/images/66zlgiwciqcbfuaaqmec5flhx7c5518j.webp',
      './assets/productsImages/radionuclide-identification-devices/gamma-radiation-detector-bdg3-for-pm1403/images/dyypzmmafjzo7a5weq0oz1kwjuc6jh4h.webp',
    ],

    status: 'Под заказ',
    shortDescription: gammaRadiationDetectorBdg3ForPm1403().shortDescription,
    fullDescription: gammaRadiationDetectorBdg3ForPm1403().fullDescription,

    tabs: {
      description: 'Описание',
      characteristics: 'Характеристики',
      docs: 'Документы',
    },

    characteristics:
      gammaRadiationDetectorBdg3ForPm1403().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      gammaRadiationDetectorBdg3ForPm1403().characteristics
    ),
    docs: getDocs({
      promotionalMaterials: [
        '../assets/productsImages/radionuclide-identification-devices/gamma-radiation-detector-bdg3-for-pm1403/promotionalMaterials/_PM1403_PM1403 Leaflet (2023.07 EN).pdf',
      ],
    }),
  },
];
