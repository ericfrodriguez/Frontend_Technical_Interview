import Head from "next/head";

import { Navbar } from "@/components/ui/Navbar";
import { BottomTabs } from '../ui/BottomTabs';
import styles from '@/styles/layouts/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <BottomTabs />
    </>
  )
}
export default Layout