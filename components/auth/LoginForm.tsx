import { FC } from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input } from 'antd';
const LoginForm: FC = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={styles.formBlock}>
      <Form name='basic' labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label='E-Mail'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please Enter E-Mail',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please Enter Password',
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
