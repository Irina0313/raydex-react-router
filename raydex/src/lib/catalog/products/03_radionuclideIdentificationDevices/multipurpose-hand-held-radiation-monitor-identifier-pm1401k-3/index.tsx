import styles from '../../style.module.scss';

export const multipurposeHandHeldRadiationMonitorIdentifierPm1401k33 = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        МКС-РМ1401К-3 является многофункциональным прибором, который объединяет
        в себе функции поискового прибора, радиометра, дозиметра, спектрометра и
        радиоизотопного идентификатора.
      </p>
      <p>
        Возможности прибора позволяют решать широкий спектр задач радиационного
        контроля: от поиска и локализации источников ионизирующего излучения до
        измерения активности радионуклидов в обнаруженных источниках.
      </p>
      <p>
        Благодаря малогабаритности, герметичности, ударопрочному корпусу, ЖКИ
        снабженному люминесцентной подсветкой, приборы могут эксплуатироваться в
        жестких и неблагоприятных климатических условиях.
      </p>
      <p>
        Предназначены для служб таможенного и пограничного контроля, служб
        быстрого реагирования, служб безопасности и силовых структур. Могут
        использоваться сотрудниками радиологических и изотопных лабораторий, на
        предприятиях, где используются ядерные технические установки и источники
        ионизирующих излучений.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>
      <strong>
        Один из самых малогабаритных и легких радиометров в мире, который
        сочетает в себе функции нескольких приборов.
      </strong>
      <p>
        Прибор обеспечивает поиск, обнаружение и локализацию радиоактивных
        материалов, путем регистрации гамма и рентгеновского (фотонного),
        нейтронного, альфа и бета излучений. Посредством аудио или
        вибросигнализации, прибор предупреждает пользователя о превышении
        установленных порогов.
      </p>
      <p>
        При помощи РМ1401К-3 пользователь может измерять МЭД гамма и
        рентгеновского излучения, а также степень загрязнения поверхностей альфа
        и бета частицами. В энергонезависимой памяти прибора сохраняется до 500
        событий и до 1000 накопленных гамма-спектров.
      </p>
      <p>
        Прибор позволяет проводить идентификацию радионуклидного состава
        вещества, а также измерять удельную (УА) и объемную (ОА) активность
        радионуклидов в образцах.
      </p>
      <h2>Стандартная комплектация включает</h2>
      <p>
        Дозиметр-радиометр поисковый МКС-РМ1401К-3, фильтры α- излучения, кабель
        USB, дистанционные кольца (для измерения α-, β- излучения), клипса, 2
        элемента питания типа AA-LR6, паспорт с отметкой о поверке и гарантийным
        талоном, упаковка, руководство по эксплуатации (электронный носитель)
      </p>
      <h2>Дополнительные аксессуары</h2>
      <p>
        Внешний вибрационный сигнализатор (для работы в шумной обстановке либо
        для скрытого поиска), наручный ремешок для крепления внешнего
        вибрационного сигнализатора, камера-замедлитель, устройство
        калибровочное, удлинитель телескопический (для проведения обследования в
        труднодоступных местах), сосуд Маринелли (для измерения удельной
        активности изотопов радионуклида цезий-137 в жидкостях и сыпучих
        продуктах), штатив (для измерения удельной активности изотопов
        радионуклида цезий-137 в жидкостях и сыпучих продуктах)
      </p>
    </div>
  );

  const characteristics = {
    ['Детектор']: 'CsI(Tl), GM, He-3',
    ['Диапазон измерения МЭД']: 'от 0.1 мкЗв/ч до 100 мЗв/ч',
    ['Диапазон индикации МЭД']: 'от 0.01 мкЗв/ч до 200 мЗв/ч',
    ['Предел допускаемой основной относительной погрешности измерения МЭД']:
      '±(15 + K/Ḣ) %, где Ḣ - значение МЭД в мЗв/ч, К – коэффициент, равный 0,0015 мЗв/ч',
    ['Диапазон измерения плотности потока альфа-излучения']: (
      <span>
        от 15.0 до 10<sup>5</sup> мин<sup>-1</sup>·см<sup>-2</sup>
      </span>
    ),
    ['Пределы допускаемой основной относительной погрешности измерения альфа- частиц в диапазоне измерения по 239 Pu']:
      (
        <span>
          ±(20 + А/φ) %, где φ - измеренная плотность потока альфа- частиц в мин
          <sup>-1</sup> ·см<sup>-2</sup>; А – коэффициент, равный 450 мин
          <sup>-1</sup> ·см
          <sup>-2</sup>
        </span>
      ),
    ['Диапазон измерения плотности потока бета-излучения']: (
      <span>
        от 6.0 до 10<sup>5</sup>мин<sup>-1</sup>·см<sup>-2</sup>
      </span>
    ),
    ['Пределы допускаемой основной относительной погрешности измерения β- частиц по (Sr-90+Y-90)']:
      '±(20 + А/φ) %, где φ - измеренная плотность потока бета- частиц в мин-1 ·см-2, А – коэффициент, равный 60 мин-1 ·см-2',
    ['Диапазон измерения УА (ОА) радионуклида 137 Cs в геометрии измерения сосуд Маринелли']:
      (
        <span>
          от 10<sup>2</sup> до 10<sup>5</sup> Бк/кг (Бк/л)
        </span>
      ),
    ['Пределы допускаемой основной относительной погрешности измерения УА (ОА) радионуклидов 137 Cs']:
      '± (30+К⁄А)%, где К – коэффициент, равный 2000 Бк/кг; А – измеренная удельная активность, Бк/кг',
    ['Чувствительность дозиметра при измерении УА (ОА) в геометрии сосуд Маринелли, не менее']:
      (
        <span>
          3.0·10<sup>-3</sup> имп·кг(л)/с·Бк для 137 Cs
        </span>
      ),
    ['Диапазон плотности пробы при измерении УА']: (
      <span>
        от 0.2 до 1.6 г/см<sup>3</sup>
      </span>
    ),
    ['Диапазон рабочих температур']: 'от -30 до +50 °С; ЖКИ от -15 до +50',
    ['в диапазоне энергий от 0,015 до 0,045 МэВ']: '± 40 %',
    ['в диапазоне энергий от 0,045 до 15,0 МэВ']: '± 30 %',
    ['Диапазон энергий измеряемого фотонного излучения']: 'от 0.015 до 15 МэВ',
    ['Диапазон граничных энергий измерения плотности потока бета-частиц']:
      'от 0.15 до 3.5 МэВ',
    ['Диапазон энергий регистрируемого нейтронного излучения']: (
      <span>
        от тепловых (0,025x10<sup>-6</sup> МэВ) до 14 МэВ
      </span>
    ),
    ['Тип сигнализации']:
      'визуальная (цветной ЖКИ), звуковая, внешняя вибрационная',
    ['Диапазон индикации скорости счета нейтронного излучения']: (
      <span>
        в режиме поиска - от 0,01 до 999 с<sup>-1</sup>
      </span>
    ),
    ['Диапазон индикации скорости счета при регистрации гамма-, альфа-, бета- излучений в режиме поиска']:
      (
        <span>
          от 1.00 до 2.7·10<sup>5</sup> с<sup>-1</sup>
        </span>
      ),
    ['Чувствительность прибора к гамма-излучению:']: (
      <span>
        для <sup>241</sup>Am 200.0 с<sup>-1</sup>/(мкЗв/ч)
        <br />
        для <sup>137</sup>Cs 200.0 с<sup>-1</sup>/(мкЗв/ч)
      </span>
    ),
    ['Чувствительность к нейтронному излучению:']: (
      <span>
        для Pu-α-Be: 0.09 имп·см<sup>2</sup>
        <br />
        для тепловых нейтронов: 4.0 имп·см<sup>2</sup>
        <br />
        для Pu-α-Be (при использовании с камерой-замедлителем): 0.6 имп·см
        <sup>2</sup>
      </span>
    ),

    ['Чувствительность к альфа-излучению (по Pu-239)']: (
      <span>
        0.5 имп·см<sup>2</sup>
      </span>
    ),
    ['Количество каналов накопления сцинтилляционных спектров гамма- излучения']:
      '1024',
    ['Чувствительность к бета-излучению (по Sr-90 + Y-90)']: (
      <span>
        3.5 имп·см<sup>2</sup>
      </span>
    ),
    ['Наличие радиоизотопной идентификации']: 'есть',
    ['Количество сохраняемых в энергонезависимой памяти сцинтилляционных спектров γ- излучения']:
      'до 1000',
    ['Обмен информацией с ПК']: 'USB',
    ['Напряжение питания']:
      '3.0 (+ 0,2; минус 0,4) В (два элемента питания типа АА)',
    ['Время непрерывной работы прибора']:
      '300 ч - в нормальных условиях эксплуатации при использовании подсветки ЖКИ, звуковой и вибрационной сигнализации не более 5 мин/сут',
    ['Степень защиты корпуса']: 'IP65',
    ['Относительная влажность']: 'до 95 % при 35 °С',
    ['Атмосферное давление']: 'от 84 до 106,7 кПа',
    ['Прибор прочен к падению на бетонный пол с высоты']: '0.7 м',
    ['Габариты']: 'не более 262х60х65 мм',
    ['Масса']: 'не более 0.82 кг',
    ['Средний срок службы']: 'не менее 10 лет',
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
