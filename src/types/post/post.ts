// ============================ 검색 ============================
/** 2023/11/08 - 브이로그/블로그 게시글 Request  - sineTlsl */
export interface SearchListRequestType {
  keyword: string;
}

/** 2023/11/08 - 브이로그/블로그 게시글  - sineTlsl */
export interface SearchListType {
  imgurl: string;
  userName: string;
  content: string;
  hashtags: string[];
  contentTitle: string;
  heart: number;
  contentId: number;
  contentDate: string;
  review: number;
}
