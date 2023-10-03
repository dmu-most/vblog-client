import axios from 'axios';

// store
import { getTokenState } from '@store/useTokenStore';

// api
import { getAccessToken, postNewAccessToken } from './auth/token';

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
    const { accessToken, refreshToken, setAccessToken } = getTokenState();

    // 특별한 헤더를 삭제
    const noAuth = config.headers['No-Auth'];
    const onlyAuthorization = config.headers['Only-Authorization'];
    const onlyRefresh = config.headers['Only-Refresh'];

    if (config.url && (config.url.includes('/token/refresh-access') || config.url.includes('/token/verify-access'))) {
      return config;
    }

    delete config.headers['No-Auth'];
    delete config.headers['Only-Authorization'];
    delete config.headers['Only-Refresh'];

    // 토큰이 필요없을 때
    if (noAuth) {
      return config;
    }

    // 액세스 토큰만 필요할 때
    if (onlyAuthorization) {
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    } else if (onlyRefresh) {
      // 리프레시 토큰만 필요할 때
      if (refreshToken) {
        config.headers['Refresh'] = `Bearer ${refreshToken}`;
      }
    } else if (refreshToken && accessToken) {
      // 액세스 & 리프레시 토큰 둘 다 필요할 때
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['Refresh'] = `Bearer ${refreshToken}`;
    }

    try {
      // 유효한 액세스 토큰인지 확인
      console.log('Attempting to get Access Token >> ', accessToken);
      const { result } = await getAccessToken();
      console.log('너 지금 테스트하니..?', result);

      // 유효하지 않을 경우 재발급
      if (!result) {
        const res = await postNewAccessToken();
        setAccessToken(res.accessToken);
      }
    } catch (error) {
      console.error('Error:', error);
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
