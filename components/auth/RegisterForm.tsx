import { Button, Form, Input, notification } from 'antd';
import style from './Auth.module.scss';
import { RegisterFormDTO } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';
const RegisterForm = () => {
  const onSubmit = async (value: RegisterFormDTO) => {
    try {
      const { accessToken } = await Api.auth.register(value);
      notification.success({
        message: 'Success Registred',
        description: 'Redirect To admin panel',
        duration: 2,
      });
      setCookie(null, '_token', accessToken, {
        path: '/',
      });
      location.href = '/dashboard';
    } catch (error) {
      console.log('RegisterForm', error);
    }
  };

  return (
    <div className={style.formBlock}>
      <Form name='reg' labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label='fullname'
          name='fullname'
          rules={[
            {
              required: true,
              message: 'Please Enter FullName',
            },
          ]}>
          <Input />
        </Form.Item>
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
export default RegisterForm;
