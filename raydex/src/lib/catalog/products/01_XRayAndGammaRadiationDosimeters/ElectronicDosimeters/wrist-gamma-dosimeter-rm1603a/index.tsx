import styles from '../../../style.module.scss';

export const wristGammaDosimeterTm1603a = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Миниатюрный профессиональный дозиметр предназначен для осуществления
        непрерывного круглосуточного контроля радиационной обстановки. Дозиметр
        измеряет дозу и мощность дозы гамма и рентгеновского излучений от 1
        мкЗв/ч до 5 Зв/ч (ДКГ-РМ1603А) или до 10 Зв/ч (ДКГ-РМ1603В) в широком
        диапазоне энергий. Прибор создан для работы в экстремальных и
        неблагоприятных условиях.
      </p>
    </div>
  );

  const characteristics = {
    ['Детектор']: <span>счетчик Гейгера-Мюллера</span>,
    ['Диапазон измерения МЭД']: <span>от 1 мкЗв/ч до 5,0 Зв/ч</span>,
    ['Диапазон измерения ЭД']: <span>от 1,0 мкЗв до 9,99 Зв</span>,
    ['Диапазон индикации МЭД']: <span>от 0,01 мкЗв/ч до 6,50 Зв/ч</span>,
    ['Диапазон индикации ЭД']: <span>от 0,01 мкЗв до 9,99 Зв</span>,
    ['Пределы допускаемой основной относительной погрешности измерения МЭД']: (
      <span>
        ±(15 + К<sub>1</sub>/+К<sub>2</sub> ) %, где Ḣ - значение МЭД, мЗв/ч, К
        <sub>1</sub> – коэффициент 0,02 (мЗв/ч); К<sub>2</sub> – коэффициент,
        равный 0,003 (мЗв/ч)<sup>-1</sup>
      </span>
    ),
    ['Пределы допускаемой основной относительной погрешности измерения ЭД']: (
      <span>± 15 %</span>
    ),
    ['Тип сигнализации']: <span>звуковая</span>,
    ['Дополнительные функции']: (
      <span>
        часы-календарь <br /> таймер <br /> секундомер{' '}
      </span>
    ),

    ['Обмен информацией с ПК']: <span>ИК</span>,
    ['Степень защиты корпуса']: <span>IP67</span>,
    ['Прибор прочен к падению на бетонный пол с высоты']: <span>0.7 м</span>,
    ['Средний срок службы']: <span>не менее 8 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106,7 кПа</span>,
    ['Диапазон рабочих температур']: <span>- 20 до +70°C</span>,
    ['Относительная влажность']: <span>до 98% при 35°C</span>,
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

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>

      <p style={{ textDecoration: 'underline' }}>
        Дозиметр выпускается в двух модификациях: ДКГ-РМ1603А и ДКГ-РМ1603В.
        ДКГ-РМ1603В отличается расширенным диапазоном измерения мощности дозы.
      </p>

      <p>
        Дозиметры оснащены энергонезависимой памятью, в которой автоматически
        сохраняется до 1000 событий истории (измерений мощности дозы, величины
        накопленной дозы, случаев и уровней превышения установленных порогов
        сигнализации; 500 МЭД + 500 ЭД). Используя инфракрасный (ИК) канал
        связи, информация из энергонезависимой памяти прибора может быть
        передана в персональный компьютер для дальнейшей обработки и анализа, а
        также представления в виде соответствующих баз данных в рамках системы
        контроля и учета доз облучения персонала.
      </p>

      <p>
        Герметичный, ударопрочный корпус позволяет использовать приборы в
        неблагоприятных условиях эксплуатации и при необходимости проводить
        дезактивацию дозиметров, а люминесцентная подсветка дает возможность
        легко считывать информацию с дисплея при отсутствии внешнего освещения.
      </p>

      <h2>Сетевые функции</h2>
      <p>
        Дозиметр может быть интегрирован в автоматизированную систему учета
        дозовых нагрузок Personal Dose Tracker, которая позволяет вести учет
        индивидуальных доз внешнего облучения персонала.
      </p>
    </div>
  );

  return {
    shortDescription,
    characteristics,
    characteristicsShortDescription,
    fullDescription,
  };
};