import { Link } from 'react-router-dom';
import styles from '../../../style.module.scss';

export const xRayAndGammaRadiationPersonalDosimeterRm1621m = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Дозиметр предназначен для измерения индивидуального эквивалента дозы и
        мощности дозы гамма и рентгеновского излучений, а также поиска,
        обнаружения и локализации радиоактивных и ядерных материалов. Данная
        модификация сочетает в себе функции поискового прибора и индивидуального
        дозиметра.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>
      <p>
        Дозиметр индивидуальный рентгеновского и гамма излучений ДКГ-PM1621
        выпускается в четырех модификациях: ДКГ-PM1621,{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a">
          ДКГ-PM1621А,
        </Link>{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m">
          ДКГ-PM1621М
        </Link>
        ,{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma/">
          ДКГ-PM1621МА
        </Link>
        .
      </p>
      <p>
        Модификация{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a">
          ДКГ-PM1621А,
        </Link>{' '}
        имеет расширенный диапазон измерения МЭД до 1 Зв/ч (
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a">
          ДКГ-PM1621А,
        </Link>
        ) в энергетическом диапазоне от 10 кэВ до 20 МэВ.
      </p>
      <p>
        В дозиметрах предусмотрена возможность установки по два независимых
        порога сигнализации по дозе и мощности дозы, превышение которых
        автоматически сопровождается звуковой сигнализацией. При этом на дисплее
        прибора отображается та величина, порог которой превышен, что
        обеспечивает своевременное информирование пользователя о радиационной
        опасности. В тех случаях, когда интенсивность излучения превышает
        верхний предел измерения мощности дозы, на дисплее отображается
        предупреждающая надпись "OL" и издается прерывистый звуковой сигнал.
      </p>
      <p>
        Дозиметры ДКГ-РМ1621 и{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621a">
          ДКГ-PM1621А,
        </Link>{' '}
        оснащены энергонезависимой памятью, в которой сохраняется до 1000
        событий истории измерений мощности дозы, величины накопленной дозы,
        случаев и уровней превышения установленных порогов сигнализации.
        Используя инфракрасный (ИК) канал связи, информация из энергонезависимой
        памяти прибора может быть передана в персональный компьютер для
        дальнейшей обработки и анализа, а также представления в виде
        соответствующих баз данных в рамках системы контроля и учета доз
        облучения персонала.
      </p>
      <p>
        Герметичный, ударопрочный корпус позволяет использовать приборы в
        неблагоприятных условиях эксплуатации, а люминесцентная подсветка дает
        возможность легко считывать информацию с дисплея при отсутствии внешнего
        освещения.
      </p>

      <h2>
        Дозиметры{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621m">
          ДКГ-PM1621M,
        </Link>{' '}
        и{' '}
        <Link to="/catalog/x-ray-and-gamma-radiation-dosimeters/personal-dosimeters/x-ray-and-gamma-radiation-personal-dosimeter-rm1621ma">
          ДКГ-PM1621MA,
        </Link>
        ДКГ-PM1621MA
      </h2>
      <p>
        В дополнение к функциям дозиметров ДКГ-РМ1621/РМ1621A, модификации
        ДКГ-РМ1621М и ДКГ-РМ1621МА имеют дополнительный поисковый режим и
        встроенную вибрационную и световую сигнализации для обнаружения и
        локализации радиоактивных материалов. Данные модификации сочетают в себе
        функции поисковых приборов и индивидуальных дозиметров на базе счетчиков
        Гейгера-Мюллера и являются малобюджетным решением для служб экстренного
        реагирования, таможенной службы и медицинских работников.
      </p>
      <h2>Сетевые функции</h2>
      <p>
        Дозиметры могут быть интегрированы в автоматизированную систему учета
        дозовых нагрузок Personal Dose Tracker, которая позволяет вести учет
        индивидуальных доз внешнего облучения персонала.
      </p>
    </div>
  );
  const characteristics = {
    ['Детектор']: <span>счетчик Гейгера-Мюллера</span>,
    ['Диапазон измерения МЭД']: (
      <span>от от 0,1 мкЗв/ч до 100 мЗв/ч или 0,1 Зв/ч</span>
    ),
    ['Диапазон измерения ЭД']: <span>от 1,0 мкЗв до 9,99 Зв</span>,
    ['Диапазон индикации ЭД']: <span>от 0,01 мкЗв до 9,99 Зв</span>,
    ['Пределы допускаемой основной относительной погрешности измерения МЭД']: (
      <span>
        ±(15 + К<sub>1</sub> /Ḣ+ К<sub>2</sub>•Ḣ) %, где Ḣ – значение МЭД,
        мЗв/ч; К<sub>1</sub> - коэффициент 0,0015 мЗв/ч; К<sub>2</sub> -
        коэффициент 0,01 (мЗв/ч)<sup>1</sup>
      </span>
    ),
    ['Пределы допускаемой основной относительной погрешности измерения ЭД']: (
      <span>±15 %</span>
    ),
    ['Тип сигнализации']: <span>звуковая</span>,
    ['Обмен информацией с ПК']: (
      <span>по специальной программе с помощью адаптера ИК канала связи</span>
    ),
    ['Габариты']: <span>87х72х39 мм</span>,
    ['Масса']: <span>(с элементом питания) не более 165 г</span>,
    ['Степень защиты корпуса']: <span>IP67</span>,
    ['Прибор прочен к падению на бетонный пол с высоты']: <span>0.7 м</span>,
    ['Средний срок службы']: <span>не менее 10 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106,7 кПа</span>,
    ['Диапазон рабочих температур']: <span>от минус 40 до плюс 60°C</span>,
    ['Относительная влажность']: <span>до 98 % при температуре 35°C</span>,
  };

  const characteristicsShortDescription = (
    <div>
      {Object.entries(characteristics)
        .slice(0, 6)
        .map(([key, value]) => (
          <div className={styles.characteristics} key={key}>
            <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{key}</span> -{' '}
            <span>{value}</span>
          </div>
        ))}
    </div>
  );
  return {
    characteristicsShortDescription,
    shortDescription,
    characteristics,
    fullDescription,
  };
};
