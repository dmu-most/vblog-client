// ============================ 회원정보 ============================
/** 2023/09/13 - 회원정보 조회 Type - sineTlsl */
export interface MyInfoType {
  id: number;
  loginId: string;
  username: string;
  imageUrl: string | null;
  socialType: string | null;
}
