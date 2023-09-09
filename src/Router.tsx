import { Routes, Route, useParams } from 'react-router-dom';
import Layout from '@layout/index';

// pages
import MainPage from '@pages/MainPage';
import DetailPage from '@pages/DetailPage';
import CategoryPage from '@pages/CategoryPage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import OauthCallbackPage from '@pages/OauthCallbackPage';
import MyPage from '@pages/MyPage';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board/:id" element={<DetailPageRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/oauth/callback" element={<OauthCallbackPage />} />
        <Route path="/myinfo" element={<MyPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
};

const DetailPageRoute: React.FC = () => {
  const { id } = useParams();

  return <DetailPage contentId={Number(id)} />;
};

export default Router;
