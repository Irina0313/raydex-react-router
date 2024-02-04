import { Flex } from 'antd';
import { Slider } from '../../components/Slider/Slider';
import { UsageCards } from '../../components/UsageCards';
import { AboutSection } from '../../components/AboutSection';
import { ContactsSection } from '../../components/ContactsSection';

import styles from './company.module.scss';

export const Company = () => {
  return (
    <Flex vertical>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.slider}`}>
          <Slider />
        </div>
      </div>

      <div className={`${styles.gray}`}>
        <div className={`${styles.wrapper}`}>
          <UsageCards />
        </div>
      </div>
      <div className={`${styles.wrapper} `}>
        <AboutSection />
      </div>
      <div className={` ${styles.gray}`}>
        <div className={`${styles.wrapper}`}>
          <ContactsSection />
        </div>
      </div>
    </Flex>
  );
};
