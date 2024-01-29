import styles from '../../style.module.scss';

export const alphaBetaRadiationDetectorBdabForPm1403 = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Блок детектирования альфа- бета- излучений БДАБ-PM1403 Блок
        детектирования БДАБ предназначен для поиска источников альфа и бета
        излучения, а также для измерения плотности потока альфа и бета
        излучений.
      </p>
      <p>
        Блок детектирования может использоваться с БДОИ-PM1403 и предназначен
        для сотрудников радиологических и изотопных лабораторий, аварийных
        служб, сотрудников таможенных и пограничных служб, а также для
        специалистов различных отраслей, где используются источники
        ионизирующего излучения.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>

      <p>Режимы работы блока альфа- бета- излучений (БДАБ):</p>
      <ul className={styles.list}>
        <li>измерения плотности потока альфа- излучения</li>
        <li>измерения плотности потока бета- излучения</li>
        поиск источников альфа- и бета- излучений
        <li>программирование режимов работы</li>
      </ul>

      <p>
        БДАБ позволяет производить установку и непрерывный контроль порогового
        уровня плотности потока альфа- и бета- излучений во всем диапазоне
        измерения, а также хранить в энергонезависимой памяти установленные
        пороговые уровни плотности потока альфа- и бета- излучений.
      </p>
      <p>
        Для удобства при поиске или измерении плотности альфа- бета- излучений
        БДАБ снабжен рукояткой, а также телескопической штангой (до 1,7 м) для
        обеспечения доступа в удаленные труднодоступные места.
      </p>

      <h2>Работа с ПК</h2>
      <p>
        Работа с ПК осуществляется при помощи специальной пользовательской
        программы поставляемой на электронном носителе.
      </p>
      <h2>Работа в составе комплексного прибора</h2>
      <p>
        БДАБ подключается к БДОИ (Блок детектирования и обработки информации) и
        БОИ (Блок отображения информации) с помощью кабеля (1.5 м.) по
        интерфейсу RS-485.
      </p>
      <p>
        В режиме измерения плотности потока альфа- и бета- излучений при
        достижении или превышении установленного порогового значения плотности
        потока альфа- и бета- излучений БДОИ/БОИ выдает прерывистый звуковой и
        световой сигналы и заполняется аналоговая шкала.
      </p>
      <h2>Другие блоки детектирования для работы с БДОИ</h2>

      <p>БДГ2 - детектор GM, блок детектирования гамма-излучения</p>
      <p>БДГ3 - детектор Csl(TI), блок детектирования гамма-излучения</p>
      <p>БДН - детектор He-3, блок детектирования нейтронного излучения</p>
    </div>
  );

  const characteristics = {
    ['Детектор']: <span>пропорциональный счетчик со слюдяным окном</span>,
    ['Диапазон измерения плотности потока α-излучения']: (
      <span>
        от 1.0 до 5∙105 мин<sup>-1</sup>·см<sup>-2</sup>
      </span>
    ),
    ['Диапазон измерения плотности потока β-излучения']: (
      <span>
        от 10.0 до 106 мин<sup>-1</sup>·см<sup>-2</sup>
      </span>
    ),
    ['Чувствительность к α-излучению (по Pu-239)']: (
      <span>
        не менее 3.0 имп·см<sup>2</sup>
      </span>
    ),
    ['Чувствительность к β-излучению (по Sr-90 + Y-90)']: (
      <span>
        не менее 2.0 имп·см<sup>2</sup>
      </span>
    ),
    ['Передача данных']: (
      <span>
        БДОИ/БОИ RS-485
        <br />
        ПК USB
      </span>
    ),

    ['Габариты']: <span>71х45х130 мм</span>,
    ['Масса']: <span>0.45 кг</span>,
    ['Степень защиты корпуса']: <span>IP64</span>,
    ['Прибор прочен к падению на бетонный пол с высоты']: (
      <span>0.7 м на бетонный пол</span>
    ),
    ['Средний срок службы']: <span>не менее 10 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106,7 кПа</span>,
    ['Диапазон рабочих температур']: <span>от -20 до +50 °С</span>,
    ['Относительная влажность']: <span>до 95 % при 35 °С</span>,
    ['Напряжение питания']: <span>3.7 В (- 0.1; + 0.5) В</span>,
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
