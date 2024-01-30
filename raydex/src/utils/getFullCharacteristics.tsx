import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title: string;
  value: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Наименование',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Значение',
    dataIndex: 'value',
    key: 'value',
  },
];

interface Characteristics {
  Детектор?: string | JSX.Element;
  'Диапазон индикации ЭД'?: string | JSX.Element;
  'Диапазон индикации МЭД'?: string | JSX.Element;
  'Диапазон измерения ЭД'?: string | JSX.Element;
  'Диапазон измерения МЭД'?: string | JSX.Element;
  'Предел допускаемой основной относительной погрешности измерения ЭД '?:
    | string
    | JSX.Element;
  'Предел допускаемой основной относительной погрешности измерения МЭД'?:
    | string
    | JSX.Element;
  'Диапазон энергий измеряемого фотонного излучения'?: string | JSX.Element;
  'Диапазон регистрируемых энергий'?: string | JSX.Element;
  'Обмен информацией с ПК'?: string | JSX.Element;
  'Тип сигнализации'?: string | JSX.Element;
  'Степень защиты корпуса'?: string | JSX.Element;
  'Атмосферное давление'?: string | JSX.Element;
  'Относительная влажность'?: string | JSX.Element;
  'Диапазон рабочих температур'?: string | JSX.Element;
  Масса?: string | JSX.Element;
  Габариты?: string | JSX.Element;
  'Средний срок службы'?: string | JSX.Element;
  'Элемент питания'?: string | JSX.Element;
  'Автоматическая запись истории'?: string | JSX.Element;
  'Прибор прочен к падению на бетонный пол с высоты'?: string | JSX.Element;
  'Время установления рабочего режима, не более'?: string | JSX.Element;
  'Диапазон установки порога'?: string | JSX.Element;
  'Время непрерывной работы прибора от одного элемента питания, не менее'?:
    | string
    | JSX.Element;
  'Энергетическая зависимость относительно энергии 0,662 МэВ (Cs-137) в режиме измерения фотонного излучения, не более'?:
    | string
    | JSX.Element;
  'Пределы допускаемой основной относительной погрешности измерения МЭД непрерывного и средней МЭД импульсного фотонного излучения'?:
    | string
    | JSX.Element;
  'Диапазон измерения средней МЭД импульсного фотонного излучения'?:
    | string
    | JSX.Element;
  'Диапазон измерения МЭД непрерывного фотонного излучения'?:
    | string
    | JSX.Element;
  'Диапазон индикации МЭД непрерывного и средней МЭД импульсного фотонного излучения'?:
    | string
    | JSX.Element;
  'Предел допускаемой основной относительной погрешности измерения ЭД'?:
    | string
    | JSX.Element;
  'Диапазон измерения ЭД непрерывного и импульсного фотонного излучения'?:
    | string
    | JSX.Element;
  'Диапазон индикации ЭД непрерывного и импульсного фотонного излучения'?:
    | string
    | JSX.Element;
  Таймер?: string | JSX.Element;
  Секундомер?: string | JSX.Element;
  'Часы-календарь'?: string | JSX.Element;
  'Пределы допускаемой основной относительной погрешности измерения МЭД'?:
    | string
    | JSX.Element;
  'Чувствительность прибора к гамма-излучению'?: string | JSX.Element;
  'Диапазон измерения плотности потока α-излучения'?: string | JSX.Element;
  'Диапазон измерения плотности потока β-излучения'?: string | JSX.Element;
  'Чувствительность к α-излучению (по Pu-239)'?: string | JSX.Element;
  'Чувствительность к β-излучению (по Sr-90 + Y-90)'?: string | JSX.Element;
  'Напряжение питания'?: string | JSX.Element;
  'Передача данных'?: string | JSX.Element;
  'Мощность амбиентного эквивалента дозы (МАЭД) нейтронного излучения, мкЗв/ч'?:
    | string
    | JSX.Element;
  'Мощность индивидуального эквивалента дозы (МИЭД), мкЗв/ч'?:
    | string
    | JSX.Element;

  'Плотность потока быстрых нейтронов, с^-1∙см^-2'?: string | JSX.Element;
  'Плотность потока тепловых нейтронов, с^-1∙см^-2'?: string | JSX.Element;

  'Доверительные границы относительных погрешностей установок при доверительной вероятности 0.95 должны быть не более'?:
    | string
    | JSX.Element;

  "Максимальная активность применяемых источников при создании широкого пучка нейтронов в 'открытой' геометрии"?:
    | string
    | JSX.Element;
  'Максимальная активность применяемых источников, поток быстрых нейтронов в телесный угол 4 π ср, c^{-1}'?:
    | string
    | JSX.Element;
  'Максимальные геометрические размеры применяемых источников, Øхh, мм'?:
    | string
    | JSX.Element;
  'Время перевода источника из положения хранения/рабочего в положение рабочее/хранения не более, сек'?:
    | string
    | JSX.Element;
  'Суммарный поток быстрых нейтронов от источников, размещенных в облучателе установки не должен превышать, с^-1'?:
    | string
    | JSX.Element;
  'Уровень собственного радиационного фона установки при использовании источника с максимальной активностью находящимися, в положении “хранение” на расстоянии 1 м от поверхности облучателя, мкЗв/ч, не более'?:
    | string
    | JSX.Element;
  'Масса приборов, устанавливаемых на рабочем столе, не более, кг'?:
    | string
    | JSX.Element;
}

const getFullCharacteristics = (characteristics: Characteristics) => {
  const data: DataType[] = Object.keys(characteristics).map((key, index) => {
    return {
      key: index.toString(),
      title: key,
      value: Object.values(characteristics)[index],
    };
  });

  return <Table columns={columns} dataSource={data} />;
};

export default getFullCharacteristics;
