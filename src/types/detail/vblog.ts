// ============================ detail ============================
/** 2023/08/28 - detail 안에 들어갈 타입 - jh */
export interface vblogType {
  contentId: number;
  contentTitle: string;
  content: string;
  heart: number;
  rank: number;
  hate: number;
  grade: number;
  imgurl: string;
  link: string;
  hashtags: string[];
}

// ============================ 최근목록 ============================
/** 2023/10/23 - 최근목록 post 요청 시 응답 Type - by sineTlsl */
export interface RecentPostResponseType {
  reason: string;
  result: boolean;
}
