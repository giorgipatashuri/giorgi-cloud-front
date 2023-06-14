import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { Tabs } from 'antd';
import Head from 'next/head';

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: '400px', margin: 'auto' }}>
        <Tabs
          items={[
            {
              label: 'Login',
              key: '1',
              children: <LoginForm />,
            },
            {
              label: 'register',
              key: '2',
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};
export default AuthPage;
