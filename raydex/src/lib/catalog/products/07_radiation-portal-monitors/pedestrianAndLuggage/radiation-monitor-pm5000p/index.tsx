import styles from '../../../style.module.scss';

export const radiationMonitorPm5000p = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Мониторы широко используются в аэропортах и на вокзалах для контроля
        выгружаемых из самолетов и поездов багажа и грузов, на почтамтах для
        контроля почтовых отправлений, в банковских учреждениях для контроля
        денежной массы, на КПП атомных электростанций и предприятиях
        атомно-промышленного комплекса, металлургических комбинатах и пр.
        Модульная конструкция позволяет легко адаптировать и конфигурировать
        систему в соответствии с требованиями заказчика. Радиационные портальные
        мониторы могут быть одно- и двухсторонними, а также могут иметь разную
        высоту зоны контроля. Они предназначены для контроля гамма, нейтронного
        или одновременно обоих видов излучений.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>

      <p>
        Радиационные мониторы могут монтироваться на полу, подвешиваться на
        стенах в закрытых и открытых помещениях и рассчитаны на эксплуатацию в
        неблагоприятных климатических условиях, имеют круглосуточный
        автоматический режим работы. В случае обнаружения в зоне контроля
        радиоактивных материалов или изменении фонового значения гамма-излучения
        включается световая и звуковая сигнализация. Информация о событиях
        сохраняется и отображается на подключенном к установке ПК.
      </p>

      <h2>Преимущества</h2>
      <ul className={styles.list}>
        <li>
          Высокая чувствительность благодаря использованию детекторов большого
          объема
        </li>
        <li>Применение новейших технологий и алгоритмов обработки данных</li>
        <li>Звуковая и световая сигнализация</li>
        <li>Возможность подключения системы видеонаблюдения</li>
        <li>
          Возможность передачи информации и сигналов по локальной сети Ethernet
          на компьютер на расстояние до 100 м.
        </li>
        <li>
          Возможность объединения установок в единую сеть с управлением с одного
          компьютера
        </li>
        <li>Круглосуточный режим работы с записью истории измерений</li>
      </ul>

      <h2>Доступные модификации</h2>
      <p>
        УРК-PM5000P - односторонний гамма монитор с повышенной чувствительностью
      </p>

      <p>УРК-PM5000P-01 - двухсторонний гамма монитор</p>

      <p>
        УРК-PM5000P-02B - односторонний гамма-нейтронный монитор (нейтронный
        детектор выполнен на основе одного твердотельного детектора
        (10B/ZnS(Ag))
      </p>

      <p>
        УРК-PM5000P-03B - двухсторонний гамма-нейтронный монитор (нейтронный
        детектор выполнен на основе одного твердотельного детектора
        (10B/ZnS(Ag))
      </p>
    </div>
  );

  const characteristics = {
    ['Вид регистрируемого излучения']: <span>гамма</span>,
    ['Минимальные обнаруживаемые количества радиоактивных материалов в зоне контроля 1 x 2 м']:
      (
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>241</sup>Am, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.4 (11)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>137</sup>Cs, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.08 (2)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>60</sup>Co, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.04 (1.1)</div>
          </div>

          <div className={styles.row}>
            <div className={styles.name}>
              <sup>133</sup>Ba, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.05 (1.25)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>238</sup>U, г
            </div>
            <div className={styles.value}>470</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>235</sup>U, г
            </div>
            <div className={styles.value}>30</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>239</sup>Pu,г
            </div>
            <div className={styles.value}>0.8</div>
          </div>
        </div>
      ),

    ['Минимальные обнаруживаемые количества радиоактивных материалов в зоне контроля 1.5 x 2 м']:
      (
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>241</sup>Am, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.7 (19)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>137</sup>Cs, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.13 (3.5)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>60</sup>Co, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.07 (1.9)</div>
          </div>

          <div className={styles.row}>
            <div className={styles.name}>
              <sup>133</sup>Ba, МБк, (мкКи)
            </div>
            <div className={styles.value}>0.08 (2.16)</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>238</sup>U, г
            </div>
            <div className={styles.value}>815</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>235</sup>U, г
            </div>
            <div className={styles.value}>50</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <sup>239</sup>Pu,г
            </div>
            <div className={styles.value}>1.4</div>
          </div>
        </div>
      ),
    ['Количество блоков детектирования']: <span>1</span>,
    ['Тип сигнализации']: <span>звуковая и световая</span>,
    ['Передача данных']: (
      <span>
        порт Ethernet кабелем длиной до 100 м., при большем расстоянии через
        Ethernet extender.
      </span>
    ),
    ['Габариты']: <span>465 x 2090 x 279 мм</span>,
    ['Масса']: <span>125 кг</span>,
    ['Степень защиты корпуса']: <span>IP65</span>,
    ['Средний срок службы']: <span>не менее 8 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106.7 кПа</span>,
    ['Диапазон рабочих температур']: <span>-30 ... + 50 °C</span>,
    ['Относительная влажность']: (
      <span>до 98% при температуре 40 °C и более низкой</span>
    ),
    ['Напряжение питания']: (
      <span>
        от промышленной сети переменного тока напряжением в диапазоне от 85 до
        264 В частотой от 47 до 63 Гц
      </span>
    ),
    ['Время непрерывной работы прибора от заряженной аккумуляторной батареи, не менее']:
      <span>не менее 8 ч.</span>,
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
