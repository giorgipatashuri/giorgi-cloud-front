import { FC } from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import { LoginFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';
const LoginForm: FC = () => {
  const onSubmit = async (values: LoginFormDto) => {
    try {
      const { accessToken } = await Api.auth.login(values);
      console.log('test');
      notification.success({
        message: 'Success Logined',
        description: 'Redirect To admin panel',
        duration: 2,
      });
      setCookie(null, '_token', accessToken, {
        path: '/',
      });
    } catch (error) {
      console.log('loginForm', error);
    }
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
