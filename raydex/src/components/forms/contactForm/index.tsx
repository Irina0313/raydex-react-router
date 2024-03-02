import { Form, Input, message } from 'antd';

import styles from './contactForm.module.scss';
import CustomButton from '../../button';

const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

interface FieldType {
  company?: string;
  surname?: string;
  name?: string;
  phone: string;
  email: string;
  middleName?: string;
  message?: string;
  defaultValue?: string;
}

interface ContactFormInterface {
  handleCancel: () => void;
  product?: string | null;
}

const ContactForm = ({ handleCancel, product }: ContactFormInterface) => {
  const [form] = Form.useForm();
  const formAction = '/php/mail.php';

  const onFinish = async (values: FieldType) => {
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        const valueForSend = value || '';
        formData.append(key, valueForSend);
      });

      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.resetFields();
        handleCancel();
        message.success('Заявка успешно отправлена');
      } else {
        handleCancel();
        message.error(
          'Произошла ошибка при отправке заявки, попробуйте еще раз'
        );
      }
    } catch (e) {
      console.error('Ошибка при отправке формы:', e);
      message.error('Произошла ошибка при отправке формы, попробуйте еще раз');
    }
  };

  return (
    <>
      <h2 className={styles.textCenter}>Задать вопрос</h2>
      <p className={styles.textCenter}>
        Пожалуйста, заполните форму ниже и наши специалисты свяжутся с Вами в
        ближайшее время.
      </p>
      <Form
        form={form}
        name="contactForm"
        method="POST"
        action={formAction}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        {...formItemLayout}
      >
        <Form.Item<FieldType>
          label="Компания"
          name="company"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Фамилия"
          name="surname"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, заполните поле' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Отчество"
          name="middleName"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: 'Пожалуйста, заполните поле' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { type: 'email', required: false, message: 'Некорректный email' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Вопрос"
          name="message"
          initialValue={`Прибор: ${product}` || ''}
          rules={[{ required: true, message: 'Пожалуйста, введите вопрос' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <CustomButton text="Отправить" htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
