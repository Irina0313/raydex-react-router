import { Button, Card, Flex, Modal } from 'antd';
import styles from './styles.module.scss';
import { useState } from 'react';
import ContactForm from '../../components/forms/contactForm';
import MapWidget from './map';

export const ContactsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    footer: {
      display: 'none',
    },
  };

  return (
    <>
      <div className={styles.contactsContainer}>
        <div className={styles.contacts}>
          <div className={styles.map}>
            <MapWidget />
          </div>

          <Card className={styles.cardContainer} hoverable>
            <Flex vertical gap="large">
              <Flex vertical gap="middle">
                <h2>Свяжитесь с нами</h2>
                <p>
                  Для получения консультации или ответа на вопрос - заполните
                  форму ниже.
                </p>
                <p className={styles.grayText}>Телефон</p>
                <a className={styles.link} href="tel:+77075847073">
                  +7 707 584 70 73
                </a>
                <a className={styles.link} href="tel:+77072008360">
                  +7 707 200 83 60
                </a>
                <p className={styles.grayText}>E-mail</p>
                <a className={styles.link} href="mailto:sales@raydexkz.com">
                  sales@raydexkz.com
                </a>
              </Flex>
              <Flex justify="center">
                <Button size="large" onClick={showModal}>
                  Написать сообщение
                </Button>
              </Flex>
            </Flex>
          </Card>
        </div>
      </div>

      <Modal open={isModalOpen} styles={modalStyles} onCancel={handleCancel}>
        <ContactForm />
      </Modal>
    </>
  );
};
