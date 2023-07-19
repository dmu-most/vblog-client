import { ReactNode } from 'react';
import Header from '@layout/Header';
import Main from '@layout/Main';
import Footer from '@layout/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}; 

export default Layout;
