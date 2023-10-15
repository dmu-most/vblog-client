import axios from 'axios';

// store
import { getTokenState } from '@store/useTokenStore';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

/** 2023/08/21 - Request interceptor 설정 - by sineTlsl */
instance.interceptors.request.use(
  async config => {
    const { accessToken, refreshToken } = getTokenState();

    // 특별한 헤더를 삭제
    const noAuth = config.headers['No-Auth'];
    const onlyAuthorization = config.headers['Only-Authorization'];
    const onlyRefresh = config.headers['Only-Refresh'];

    delete config.headers['No-Auth'];
    delete config.headers['Only-Authorization'];
    delete config.headers['Only-Refresh'];

    // 토큰이 필요없을 때
    if (noAuth) {
      return config;
    }

    if (onlyAuthorization && accessToken) {
      // 액세스 토큰만 필요할 때
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    } else if (onlyRefresh && refreshToken) {
      // 리프레시 토큰만 필요할 때
      config.headers['Refresh'] = `Bearer ${refreshToken}`;
    } else if (refreshToken && accessToken) {
      // 액세스 & 리프레시 토큰 둘 다 필요할 때
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['Refresh'] = `Bearer ${refreshToken}`;
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
    return res;
  },
  async err => {
    const originalRequest = err.config;
    const { setAccessToken, setRefreshToken, accessToken, refreshToken } = getTokenState();

    // originalRequest._retry: 원래의 요청을 이미 한 번 다시 보냈는지를 나타내는 플래그
    if (accessToken && refreshToken && err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .post(
          `${process.env.REACT_APP_API_URL}/token/verify/access`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Refresh: `Bearer ${refreshToken}`,
            },
          },
        )
        .then(res => {
          if (res.status === 200) {
            setAccessToken(res.headers.authorization);

            console.log(res);
            return instance(originalRequest);
          }
        })
        .catch(() => {
          console.log('다지워짐 헤헤');
          setRefreshToken('');
          setAccessToken('');
        });
    }

    return Promise.reject(err);
  },
);

export default instance;
