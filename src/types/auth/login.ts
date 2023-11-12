// ============================ 로그인 ============================
/** 2023/09/08 - 로그인 폼 양식 Type - by sineTlsl */
export interface LoginFormType {
  loginId: string;
  password: string;
}

/** 2023/09/13 - 로그인 성공 시 (Response) - by sineTlsl */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  category: string[];
  imageUrl: string | null;
  isSelected: boolean;
  username: string | null;
}
