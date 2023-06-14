import { GetServerSidePropsContext, NextPage } from 'next';
import nookies from 'nookies';
import axios from '@/core/axios';
import * as Api from '@/api';
import { Layout } from '@/layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div>dashboard</div>
      </main>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Dashboard'>{page}</Layout>;
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
