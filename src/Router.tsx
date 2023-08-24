import { Routes, Route } from 'react-router-dom';
import Layout from '@layout/index';

// pages
import MainPage from '@pages/MainPage';
import DetailPage from '@pages/DetailPage';
import CategoryPage from '@pages/CategoryPage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import OauthCallbackPage from '@pages/OauthCallbackPage';
import MyPage from '@pages/MyPage';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/oauth/callback" element={<OauthCallbackPage />} />
        <Route path="/myinfo" element={<MyPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
