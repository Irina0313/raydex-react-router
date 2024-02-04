import { Flex, Typography } from 'antd';
import styles from './about.module.scss';

export const AboutSection = () => {
  return (
    <Flex vertical className={styles.aboutContainer}>
      <Typography.Title level={2} style={{ margin: '0', fontWeight: 'bold' }}>
        О компании
      </Typography.Title>
      <Typography.Paragraph>
        ТОО «Raydex» - современная компания, занимающаяся поставками различного
        измерительного оборудования радиационного контроля.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Опыт и профессионализм наших сотрудников позволяет закрыть ключевые
        потребности клиентов быстро и качественно.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Компания ТОО «Raydex» является официальным дистрибьютором на территории
        Центральной Азии оборудования торговой марки Radmetron.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Квалифицированный персонал компании оказывает большой перечень услуг в
        области обеспечения радиологического контроля. Проводит обучение и
        презентации, оказывает услуги послепродажного сервиса.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Сотрудничество с нашей компанией гарантирует четкое исполнение
        договорных обязательств, высокий уровень сервиса и только качественный
        продукт от лучших мировых производителей.
      </Typography.Paragraph>
    </Flex>
  );
};
