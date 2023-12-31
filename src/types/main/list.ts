
// ============================ postcard -> main ============================
/** 2023/08/28 - postcard 안에 들어갈 타입 - jh */
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

/** 2023/08/28 - banner 안에 들어갈 타입 - jh */
export interface BannerType {
  contentId: number;
  imgUrl: string;
}

export interface BannerTags {
  hashtags: string[];
}