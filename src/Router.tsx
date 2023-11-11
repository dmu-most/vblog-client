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
import IntroPage from '@pages/IntroPage';
import SearchPostsPage from '@pages/SearchPostsPage';

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
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/search" element={<SearchPostsPage />} />
      </Routes>
    </Layout>
  );
};

const DetailPageRoute: React.FC = () => {
  const { id } = useParams();

  return <DetailPage contentId={Number(id)} />;
};

export default Router;
