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
<<<<<<< HEAD

/** 2023/08/28 - detail 안에 좋아요/싫어요 요청 - jh */
export interface VblogLikeRequest {
  likeInfo: boolean;
}
=======
>>>>>>> 10761e298c03b850a5bafdd8943cf3a1a7c14d6d
