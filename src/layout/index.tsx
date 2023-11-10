import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';

import Header from '@layout/Header';
import Main from '@layout/Main';
import Footer from '@layout/Footer';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const hidePages = ['/login', '/signup']; // header와 footer를 숨기고 싶은 페이지

  /** 2023/07/25 - 현재 페이지의 경로가 hidePages에 포함되어 있는지 확인하는 함수 - by sineTlsl */
  const shouldHide = () => hidePages.includes(location.pathname);

  /** 2023/09/14 - 스크롤이 어디있든 모든 페이지 최상단에 두는 함수 - by jh*/
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!shouldHide() && <Header />}
      <Main className={shouldHide() ? undefined : 'header_margin'}>{children}</Main>
      {!shouldHide() && <Footer />}
    </>
  );
};

export default Layout;
