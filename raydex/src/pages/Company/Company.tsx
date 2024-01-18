import { Flex } from 'antd';
import { Slider } from '../../components/Slider/Slider';
import { UsageCards } from '../../components/UsageCards';
import { AboutSection } from '../../components/AboutSection';
import { ContactsSection } from '../../components/ContactsSection';

export const Company = () => {
  return (
    <Flex vertical gap={40}>
      <Slider />
      <div style={{ backgroundColor: 'rgb(248, 248, 248)', padding: '40px' }}>
        <UsageCards />
      </div>
      <div style={{ padding: '40px' }}>
        <AboutSection />
      </div>
      <div style={{ backgroundColor: 'rgb(248, 248, 248)', padding: '40px' }}>
        <ContactsSection />
      </div>
    </Flex>
  );
};
