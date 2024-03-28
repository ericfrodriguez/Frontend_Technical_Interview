import Head from "next/head";
import { Navbar } from "@/components/ui/Navbar";
import { BottomTabs } from '../ui/BottomTabs';

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
      <nav>
        <Navbar />
        <BottomTabs />
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
export default Layout