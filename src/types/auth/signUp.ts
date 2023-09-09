// ============================ 회원가입 ============================
/** 2023/08/15 - 회원가입 폼 양식 Type - sineTlsl */
export interface SignUpFormType {
  id: string;
  name: string;
  password: string;
  passwordConfirm?: string;
}

/** 2023/08/21 - 회원가입 폼 (Request) - by sineTlsl */
export interface SignUpRequest {
  loginId: string;
  password: string;
  username: string;
}

/** 2023/08/21 - 회원가입 폼 (Response) - by sineTlsl */
export interface SignUpResponse {
  data: SignUpRequest[];
}

// ============================ 아이디 중복 확인 ============================
/** 2023/09/08 - 아이디 중복 확인 (Request) - by sineTlsl */
export interface CheckIdRequest {
  loginId: string;
}

/** 2023/09/08 - 아이디 중복 확인 (Response) - by sineTlsl */
export interface CheckIdResponse {
  result: boolean;
  message: string;
}
