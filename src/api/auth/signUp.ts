import instance from '@api/axiosInstance';

// type
import { SignUpRequest, SignUpResponse, CheckIdRequest, CheckIdResponse } from 'types/auth/signUp';

/** 2023/08/21 - 회원가입 POST 요청 - by sineTlsl */
export const postSignUp = async (body: SignUpRequest) => {
  const { data } = await instance.post<SignUpResponse>('/signup', body);

  return data;
};

/** 2023/09/08 - 중복 아이디 체크 GET 요청 - by sineTlsl */
export const getCheckId = async (params: CheckIdRequest) => {
  const { data } = await instance.get<CheckIdResponse>('/check-id', { params });

  return data;
};
