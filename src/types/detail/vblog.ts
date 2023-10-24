
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

/** 2023/08/28 - detail 안에 좋아요 타입 - jh */
export interface VblogLikeRequest {
  likeInfo: boolean;
}