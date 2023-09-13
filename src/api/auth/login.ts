import instance from '@api/axiosInstance';

// type
import { LoginFormType } from 'types/auth/login';

// ============================ 로그인 ============================
/** 2023/09/09 - 로그인 POST 요청 - by sineTlsl */
export const postLogin = async (body: LoginFormType) => {
  const { data, headers } = await instance.post('/login', body, {
    headers: {
      'No-Auth': true,
    },
  });

  return {
    data,
    accessToken: headers['authorization'],
    refreshToken: headers['refresh'],
  };
};
