
// ============================ postcard -> main ============================
/** 2023/08/28 - postcard 안에 들어갈 양식 - jh */
export interface vblogListType {
  contentId: number;
  contentDate: string;
  contentTitle: string;
  content: string;
  heart: number;
  review: number;
  userName: string;
  hashtags: string[];
  imgurl: string;
}

export interface BannerType {
  // contentId: number;
  // heart: number;
  imgUrl: string;
}