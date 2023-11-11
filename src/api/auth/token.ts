import instance from '@api/axiosInstance';

// type
import { CheckAccessTokenResponse } from 'types/auth/token';

// ============================ TOKEN ============================
/** 2023/09/13 - 액세스 토큰 검증 GET 요청 - by sineTlsl */
export const getAccessToken = async () => {
  const { data } = await instance.get<CheckAccessTokenResponse>('/token/verify-access', {});

  return data;
};

/** 2023/09/14 - 액세스 토큰 재발급 GET 요청 - by sineTlsl */
export const postNewAccessToken = async () => {
  const { headers } = await instance.post('/token/refresh-access', {
    headers: {
      'Both-Tokens': true,
    },
  });

  return { accessToken: headers['authorization'] };
};
