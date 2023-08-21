// ============================ 회원가입 ============================
/** 2023/08/15 - 회원가입 폼 양식 Type - sineTlsl */
export interface SignUpFormType {
  id: string;
  email: string;
  name: string;
  password: string;
  passwordConfirm?: string;
}

/** 2023/08/21 - 회원가입 폼 (Request) - by sineTlsl */
export interface SignUpRequest {
  email: string;
  loginId: string;
  password: string;
  username: string;
}

/** 2023/08/21 - 회원가입 폼 (Response) - by sineTlsl */
export interface SignUpResponse {
  data: SignUpRequest[];
}
