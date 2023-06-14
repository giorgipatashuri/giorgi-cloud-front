import { Button } from 'antd';
import { NextPageWithLayout } from '../_app';
import { User } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { GetServerSidePropsContext } from 'next';
import { checkAuth } from '@/utils/checkAuth';
import { ReactElement } from 'react';
import { Layout } from '@/layouts/Layout';
interface Props {
  userData: User;
}

const DashboardProfilePage: NextPageWithLayout<Props> = ({ userData }) => {
  const onClickLogout = () => {
    Api.auth.logout();
    location.href = '/';
  };
  return (
    <>
      <main>
        <div style={{ margin: '60px' }}>
          <h1>My Profile</h1>
          <br />
          <p>
            ID: <b>{userData.id}</b>
          </p>
          <p>
            FullName: <b>{userData.fullname}</b>
          </p>
          <p>
            E-Mail: <b>{userData.email}</b>
          </p>
          <br />
          <Button onClick={onClickLogout} type='primary' danger>
            Log out
          </Button>
        </div>
      </main>
    </>
  );
};
DashboardProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Dashboard'>{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();
  return {
    props: { userData },
  };
};

export default DashboardProfilePage;
