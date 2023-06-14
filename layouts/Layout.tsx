import { Header } from '@/components/Header/Header';
import Head from 'next/head';
import style from '@/styles/Home.module.scss';
interface LayoutProps {
  title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={style.main}>
          <div className={style.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};
