import { Routes, Route } from 'react-router-dom';
import Layout from '@layout/index';

// pages
import MainPage from '@pages/MainPage';
import DetailPage from '@pages/DetailPage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
