import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import Head from 'next/head';
import axios from '@/core/axios';
import * as Api from '@/api';
const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main style={{ width: '400px', margin: 'auto' }}></main>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);
  axios.defaults.headers.Authorization = 'Bearer ' + _token;
  try {
    await Api.auth.getMe();
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permament: false,
      },
    };
  }
};

export default DashboardPage;
