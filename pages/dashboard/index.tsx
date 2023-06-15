import { GetServerSidePropsContext } from 'next';
import { Layout } from '@/layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { checkAuth } from '@/utils/checkAuth';

import style from '@/styles/Home.module.scss';
import { Button, Menu } from 'antd';
import { useRouter } from 'next/router';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { UploadButton } from '@/components/UploadButton/UploadButton';

const DashboardPage: NextPageWithLayout = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <>
      <main className={style.dashboardContainer}>
        <div className={style.sideBar}>
          <UploadButton />
          <Menu
            className={style.menu}
            mode='inline'
            selectedKeys={[selectedMenu]}
            items={[
              {
                key: `/dashboard`,
                icon: <FileOutlined />,
                label: `Files`,
                onClick: () => router.push('/dashboard'),
              },
              {
                key: `/dashboard/photos`,
                icon: <FileImageOutlined />,
                label: `Photos`,
                onClick: () => router.push('/dashboard/photos'),
              },
              {
                key: `/dashboard/trash`,
                icon: <DeleteOutlined />,
                label: `Trash`,
                onClick: () => router.push('/dashboard/trash'),
              },
            ]}
          />
        </div>
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
