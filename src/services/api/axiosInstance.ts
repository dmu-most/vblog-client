import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    // 요청 하기 전 작업 수행

    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  res => {
    // 응답 데이터로 작업 수행

    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
