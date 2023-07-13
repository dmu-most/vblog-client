import { ReactNode } from 'react';
import styled from 'styled-components';


import Header from '@layout/Header';
import Main from '@layout/Main';
import Footer from '@layout/Footer';

type LayoutProps = {
  children: ReactNode;
};

// const LayoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

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
