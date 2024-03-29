import { Image } from 'antd';
import styles from '../../style.module.scss';

export const automaticIrradiationCalibrationSystemPm9101 = () => {
  const shortDescription = (
    <div className={styles.shortDescriptionContainer}>
      <p>
        Установка предназначена для поверки, калибровки, градуировки и испытаний
        в коллимированном пучке гамма- излучения (создаваемых эталонными
        источниками <sup>241</sup>Am, <sup>137</sup>Cs, <sup>60</sup>Co и
        других) средств измерений экспозиционной дозы и мощности экспозиционной
        дозы, кермы и мощности кермы в воздухе, амбиентного эквивалента дозы и
        мощности амбиентного эквивалента дозы, индивидуального эквивалента дозы
        и мощности индивидуального эквивалента дозы.
      </p>
      <p>
        Установка безопасна для персонала и населения. Радиационное воздействие
        при эксплуатации, неисправности или аварии ограничивается рабочей
        камерой.
      </p>
      <p>
        Установка предназначена для лабораторий метрологических служб и
        предприятий занимающихся разработкой и производством дозиметрической
        аппаратуры.
      </p>
    </div>
  );

  const fullDescription = (
    <div className={styles.fullDescription}>
      <h2>Принцип работы</h2>

      <p>
        В установке реализуется схема облучения с одним неподвижным
        многопозиционным облучателем и системой линейного перемещения рабочего
        стола (СЛП). Изменение значений дозиметрических величин, воспроизводимых
        в установке, достигается применением источников гамма- излучения
        различной активности и изменением расстояния между источником и
        детектором в интервале рабочих расстояний установки. Управление выбором
        источника в барабане облучателя, выводом выбранного источника в рабочее
        положение и позиционированием проверяемого прибора в пучке излучения
        установки осуществляется оператором дистанционно с ПУ установки или при
        помощи специального метрологического ПО установленного на ПК.
      </p>
      <h2>Преимущества</h2>
      <ul className={styles.list}>
        <li>
          Конструкция установки обеспечивает ее безопасную эксплуатацию при
          любых нештатных ситуациях
        </li>
        <li>
          Работа многопозиционных облучателей МО12 и МО14 с ИИИ осуществляется
          дистанционно
        </li>
        <li>
          Все детали и узлы облучателя, которые находятся в контакте с
          источниками, не требуют обслуживания в течение всего срока
          эксплуатации установки
        </li>
        <li>
          Применение цилиндрических направляющих, подшипниковых опор и зубчатого
          ремня обеспечивают точность позиционирования, высокую скорость и
          бесшумность работы системы линейного перемещения (СЛП)
        </li>
        <li>
          Автоматизирована процедура измерения анизотропии чувствительности
          дозиметров
        </li>
        <li>
          Предусмотрена возможность дистанционного (из комнаты оператора)
          подключения различных стендов и приборов, установленных на рабочем
          столе
        </li>
        <li>
          Система управления установки, выполненная на базе промышленной
          автоматики, обеспечивает надежную и безотказную работу на время всего
          срока эксплуатации установки
        </li>
        <li>
          Дисплей пульта управления установки имеет простое, интуитивно понятное
          и наглядное меню. Для более удобной работы на дисплей выдаются
          различные текстовые сообщения о нарушениях и подсказки оператору при
          неправильных действиях
        </li>
        <li>
          Системы сигнализации и блокировок совместно с системой управления
          установкой и системой радиационного контроля обеспечивают защиту
          персонала от облучения
        </li>
      </ul>
      <h2>Автоматический режим калибровки</h2>
      <p>
        Специальное ПО, кроме ручного режима, обеспечивает автоматический режим
        калибровки.
      </p>

      <p>
        При автоматической калибровке, оператору необходимо выбрать одну из
        имеющихся программ (или задать собственную), зарегистрировать
        калибруемый прибор в системе, вставить его в кассетницу и установить на
        поворотный столик.{' '}
        <span style={{ textDecoration: 'underline' }}>
          Все остальные процессы установка выполняет автоматически.
        </span>
      </p>

      <p>
        Результаты поверки оформляют выдачей свидетельства о поверке в
        соответствии с ТКП 8.003-2011. В свидетельстве указывается следующая
        информация: данные лаборатории проводящей калибровку и контакты
        компании-заказчика, информация о калибруемом приборе, условия проведения
        калибровки, информация об аккредитации калибровочной установки и таблица
        с данными о результатах калибровки.
      </p>
      <Image
        style={{ width: '50vw' }}
        src="../../../../../.././assets/productsImages/gamma-radiation-calibration-equipment/automatic-irradiation-calibration-system-pm9101/images/scheme_pm9000.jpg"
      />

      <h2>Доступные модификации</h2>
      <p>Установка выпускается в двух модификациях:</p>

      <ul className={styles.list}>
        <li>УДГА-PM9100 (облучатель МО14)</li>
        <li>УДГА-PM9101 (облучатель МО12)</li>
      </ul>
      <p>
        РM9101 отличается от PM9100 применением радионуклидных источников
        гамма-излучения с меньшей активностью.
      </p>
      <h2>Комплект поставки</h2>
      <ul className={styles.list}>
        <li>
          Многопозиционный облучатель МО12 (для РМ9101) или МО14 (для РМ9100)
        </li>
        <li>Комплект принадлежностей облучателя</li>
        <li>Система линейного перемещения рабочего стола</li>
        <li>Система лазерной юстировки прибора на рабочем столе</li>
        <li>Система управления установки</li>
        <li>Система радиационной безопасности</li>
        <li>Система радиационного контроля</li>
        <li>Система видеонаблюдения</li>
        <li>
          Переговорное устройство между рабочей камерой и комнатой оператора
        </li>
        <li>Автоматизированное рабочее место оператора (АРМ)</li>
        <li>
          Специальное ПО для автоматизации процедур калибровки и поверки
          приборов
        </li>
        <li>Комплект рабочих принадлежностей</li>
        <li>Руководство по эксплуатации</li>
      </ul>
    </div>
  );

  const characteristics = {
    ['Доверительные границы относительных погрешностей единиц мощности амбиентного эквивалента дозы (МАЭД), мощности индивидуального эквивалента дозы (МИЭД) при доверительной вероятности 0.95 при аттестации установки в качестве']:
      (
        <span>
          рабочего эталона 1-ого разряда, не более 4.5% <br />
          рабочего эталона 2-ого разряда, не более 7%
        </span>
      ),

    ['Доверительные границы относительных погрешностей единиц мощности кермы в воздухе (МКВ), мощности экспозиционной дозы (МЭД) при доверительной вероятности 0.95 при аттестации установки в качестве']:
      (
        <span>
          рабочего эталона 1-ого разряда, не более 2.5% <br />
          рабочего эталона 2-ого разряда, не более 5%{' '}
        </span>
      ),

    ['Относительная погрешность определения расстояния от центра источника до центра детектора дозиметрического прибора, не более']:
      <span>± 0.15 %</span>,
    ['Количество источников']: <span>До 6 шт.</span>,
    ['Время установления рабочего режима, не более']: <span>1 мин</span>,
    ['Время перевода источника в рабочее положение, не более']: (
      <span>не более 20 с</span>
    ),
    ['Высота оси пучка облучения над уровнем пола']: <span>1500 ± 30 мм</span>,
    ['МЭД излучения, не более']: (
      <span>
        на наружной поверхности облучателя 10 мкЗв/ч <br /> на расстоянии 1 м
        0.5 мкЗв/ч
      </span>
    ),

    ['Диаметры выходного отверстия канала коллиматора']: (
      <span>
        по ГОСТ 8.087-2000 60 и 90 мм <br />
        по СТБ ISO 4037-1 120 мм
      </span>
    ),

    ['Длина канала коллиматора (от центра источника)']: (
      <span>
        по ГОСТ 8.087-2000 150 мм <br />
        по СТБ ISO 4037-1-2014 270 мм
      </span>
    ),

    ['Дискретность задания угла поворота рабочего стола']: <span>1°</span>,
    ['Интервал перемещений рабочего стола относительно центра подвижной платформы, не менее']:
      (
        <span>
          по оси Х ± 240 мм <br /> по оси Y ± 200 мм
        </span>
      ),

    ['Интервал перемещения рабочего стола (по координате Х) от центра источника до детектора дозиметрического прибора']:
      <span>от 350 до 8000 мм</span>,
    ['Интервал рабочих расстояний (по координате Х) от центра источника до детектора дозиметрического прибора']:
      <span>от 500 до 7000 мм</span>,
    ['Угол поворота рабочего стола вокруг вертикальной оси относительно первоначального положения']:
      <span>360°</span>,
    ['Скорость перемещения подвижной платформы (ось Х)']: (
      <span>от 0.5 мм/с до 0.5 м/с</span>
    ),
    ['Габариты и масса облучателя']: <span>640х730х1800 мм, 1400 кг</span>,
    ['Габариты и масса пульта управления установкой']: (
      <span>500х400х120 мм, 9 кг</span>
    ),
    ['Габариты и масса системы линейного перемещения рабочего стола, не более']:
      <span>8300х1150х1500 мм, 450 кг</span>,
    ['Габариты и масса станции управления установкой']: (
      <span>1500х800х500 мм, 150 кг</span>
    ),
    ['Масса оборудования устанавливаемого на']: (
      <span>
        рабочий стол 50 кг <br /> платформу 150 кг{' '}
      </span>
    ),

    ['Рекомендуемые размеры помещения для размещения установки']: (
      <span>
        рабочая камера 11 х 5м, высота 3 м <br />
        комната управления 5 х 2,5 м{' '}
      </span>
    ),

    ['Время непрерывной работы установки, не менее']: <span>24 ч</span>,
    ['Средний срок службы']: <span>не менее 15 лет</span>,
    ['Атмосферное давление']: <span>от 84 до 106,7 кПа</span>,
    ['Диапазон рабочих температур']: <span>(20±10)°С</span>,
    ['Относительная влажность']: <span>от 45 % до 80 %</span>,
    ['Напряжение питания']: (
      <span>
        от трехфазной сети переменного тока напряжением (400±40) В или от
        однофазной сети переменного тока (230±23) В с частотой (50±1) Гц
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
