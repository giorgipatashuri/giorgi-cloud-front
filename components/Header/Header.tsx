import React from 'react';
import { Layout, Avatar, Menu, Popover, Button } from 'antd';
import styles from './Header.module.scss';
import { CloudOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Api from '@/api';

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    Api.auth.logout();
    location.href = '/';
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Giorgi Cloud
          </h2>

          <Menu
            className={styles.topMenu}
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: '/dashboard', label: 'Dashboard' },
              { key: '/dashboard/profile', label: 'Profile' },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger='click'
            content={
              <Button onClick={onClickLogout} type='primary' danger>
                Log out
              </Button>
            }>
            <Avatar>G</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
