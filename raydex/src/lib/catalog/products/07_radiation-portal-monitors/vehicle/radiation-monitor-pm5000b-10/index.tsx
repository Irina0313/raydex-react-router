import styles from '../../../style.module.scss';

export const radiationMonitorPm5000b10 = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Серия радиационных портальных мониторов PM5000B - это
        высокочувствительные стационарные системы, предназначенные для
        обеспечения контроля за перемещением радиоактивных материалов. Гамма,
        нейтронные и гамма-нейтронные радиационные мониторы рекомендуются для
        контроля легкового и грузового транспорта, а также железнодорожных
        составов.
      </p>
      <p>
        Мониторы могут быть установлены на пограничных и таможенных пунктах
        пропуска; на объектах, использующих или производящих ядерные материалы;
        при входном контроле на предприятиях, использующих или перерабатывающих
        вторичное сырье, для предотвращения попадания источников излучения в
        технологические процессы.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>

      <p>
        Мониторы монтируются на основаниях на земле и рассчитаны на эксплуатацию
        в неблагоприятных климатических условиях. Мониторы могут иметь разную
        высоту зоны контроля и осуществлять контроль гамма, нейтронного или
        одновременно обоих видов излучения. Автомобильные мониторы могут быть
        снабжены системами видеонаблюдения, и обеспечивают обмен данными с ПК.
      </p>

      <h2>Преимущества</h2>
      <ul className={styles.list}>
        <li>
          Улучшенная чувствительность благодаря детекторам большего объема
        </li>
        <li>Применение новейших технологий и алгоритмов обработки данных</li>
        <li>Модульный принцип построения</li>
        <li>Звуковая и световая сигнализация</li>
        <li>Круглосуточный режим работы с записью истории измерений</li>
        <li>Возможность подключения системы видеонаблюдения</li>
        <li>
          Возможность объединения мониторов в единую сеть с управлением с одного
          компьютера и последующей интеграцией в сеть более высокого уровня с
          управлением из командного экспертного центра
        </li>
      </ul>
      <h2>Автоматизированное рабочее место</h2>
      <p>
        Автоматизированное рабочее место дает возможность дистанционного
        изменения параметров и режимов работы монитора, а также считывания и
        индикации информации из оперативной памяти монитора
      </p>
      <h2>Программное обеспечение</h2>
      <p>
        Программное обеспечение для работы с портальными мониторами выполняет
        следующие функции:
      </p>
      <ul className={styles.list}>
        <li>удаленный мониторинг статуса портальных мониторов</li>
        <li>идентификация объекта, вызвавшего сработку</li>
        <li>автоматическое составление отчета</li>
        <li>возможность передачи данных в удаленный командный центр</li>
      </ul>
      <h2>Доступные модификации</h2>
      <p>
        УРК-РМ5000В-01 - двухсторонний гамма монитор из четырех блоков
        детектирования
      </p>

      <p>
        УРК-РМ5000В-05 - двухсторонний гамма монитор из двух блоков
        детектирования
      </p>

      <p>
        УРК-РМ5000В-09 - двухсторонний гамма-нейтронный монитор, состоит из двух
        детекторов гамма-излучения и двух детекторов нейтронного излучения на
        основе <sup>10</sup>B/ZnS(Ag)
      </p>

      <p>
        УРК-РМ5000В-10 - двухсторонний гамма-нейтронный монитор, состоит из
        четырех детекторов гамма-излучения и четырех детекторов нейтронного
        излучения на основе <sup>10</sup>B/ZnS(Ag)
      </p>

      <p>
        УРК-РМ5000В-13 - двухсторонний нейтронный монитор, состоящий из двух
        детекторов нейтронного излучения на основе <sup>10</sup>B/ZnS(Ag)
      </p>

      <p>
        УРК-РМ5000В-14 - двухсторонний нейтронный монитор, состоящий из четырех
        детекторов нейтронного излучения на основе <sup>10</sup>B/ZnS(Ag)
      </p>

      <p>
        УРК-РМ5000В-16 - двухсторонний гамма монитор состоящий из 8 блоков
        детектирования
      </p>
    </div>
  );

  const characteristics = {
    ['Вид регистрируемого излучения']: <span>гамма, нейтронное</span>,
    ['Минимальные обнаруживаемые количества радиоактивных материалов в зоне контроля 6 x 4.5 м']:
      (
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.name}></div>
            <div className={styles.value}> 8 км/ч</div>
            <div className={styles.value}>20 км/ч</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>241</sup>Am, МБк, (мкКи)
            </div>
            <div className={styles.value}>1.5 (41)</div>
            <div className={styles.value}>2.3 (62)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>137</sup>Cs, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.16 (4.3)</div>
            <div className={styles.value}>0.24 (6.5)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>60</sup>Co, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.10 (2.7)</div>
            <div className={styles.value}>0.15 (4.1)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>57</sup>Co, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.20 (5.4)</div>
            <div className={styles.value}>0.30 (8.1)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>133</sup>Ba, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.10 (2.7)</div>
            <div className={styles.value}>0.15 (4.1)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>238</sup>U, г
            </div>
            <div className={styles.value}>1300</div>
            <div className={styles.value}>1900</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>235</sup>U, г
            </div>
            <div className={styles.value}>80</div>
            <div className={styles.value}>120</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>239</sup>Pu,г
            </div>
            <div className={styles.value}>2.3</div>
            <div className={styles.value}>3.4</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>239</sup>Pu, g (4 см Pb)
            </div>
            <div className={styles.value}>240</div>
            <div className={styles.value}>400</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>239</sup>Cf, нейтрон/с
            </div>
            <div className={styles.value}>14000</div>
            <div className={styles.value}>24000</div>
          </div>
        </div>
      ),

    ['Количество блоков детектирования']: <span>4 гамма, 4 нейтронных</span>,
    ['Тип сигнализации']: <span>звуковая и световая</span>,
    ['Передача данных']: (
      <span>
        порт Ethernet кабелем длиной до 100 м, на расстояние до 1000 м возможно
        с помощью специальной аппаратуры передачи данных
      </span>
    ),
    ['Масса']: <span>не более 610 кг</span>,
    ['Степень защиты корпуса']: <span>IP65</span>,
    ['Средний срок службы']: <span>не менее 8 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106,7 кПа</span>,
    ['Диапазон рабочих температур']: <span>от -30 до +50 °C</span>,
    ['Относительная влажность']: <span>98 % при плюс 40°C</span>,
    ['Напряжение питания']: (
      <span>
        промышленная сеть переменного тока 115-230 В., 47-63 Гц. или встроенный
        аккумулятор постоянного тока 12 В (резервное питание не менее 8 ч.)
      </span>
    ),
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
