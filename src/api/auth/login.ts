import instance from '@api/axiosInstance';

// type
import { LoginFormType } from 'types/auth/login';

/** 2023/09/09 - 로그인 POST 요청 - by sineTlsl */
export const postLogin = async (body: LoginFormType) => {
  const { data } = await instance.post('/login', body);

  return data;
};
