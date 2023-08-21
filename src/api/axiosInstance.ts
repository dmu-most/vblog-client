import axios from 'axios';

// store
import { useTokenStorage } from '@store/useTokenStore';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/** 2023/08/21 - Request interceptor 설정 - by sineTlsl */
instance.interceptors.request.use(
  async config => {
    // 요청 하기 전 작업 수행
    // No-Auth 헤더가 없는 경우에만 토큰을 추가
    if (!config.headers['No-Auth']) {
      const { accessToken, refreshToken } = useTokenStorage();

      if (accessToken && refreshToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['Authorization-refresh'] = `Bearer ${refreshToken}`;
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

/** 2023/08/21 - Response interceptor 설정 - by sineTlsl */
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
