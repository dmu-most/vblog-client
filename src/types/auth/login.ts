// ============================ 로그인 ============================
/** 2023/09/08 - 로그인 폼 양식 Type - by sineTlsl */
export interface LoginFormType {
  loginId: string;
  password: string;
}

/** 2023/09/13 - 로그인 성공 시 (Response) - by sineTlsl */
export interface LoginResponse {
  imageUrl: string | null;
  username: string;
}
``;
