import LoginForm from '@/components/auth/LoginForm';
import { Tabs } from 'antd';
import { NextPage } from 'next';
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
              children: <h1>register</h1>,
            },
          ]}
        />
      </main>
    </>
  );
};
export default AuthPage;
