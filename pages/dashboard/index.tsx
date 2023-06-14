import { GetServerSidePropsContext, NextPage } from 'next';
import nookies from 'nookies';
import axios from '@/core/axios';

import { Layout } from '@/layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { checkAuth } from '@/utils/checkAuth';

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
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }
  return {
    props: {},
  };
};

export default DashboardPage;
