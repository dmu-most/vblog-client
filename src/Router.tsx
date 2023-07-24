import { Routes, Route } from 'react-router-dom';
import Layout from '@layout/index';
import MainPage from '@pages/MainPage';

// pages

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
