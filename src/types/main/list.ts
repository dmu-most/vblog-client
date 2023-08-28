
// ============================ postcard -> main ============================
/** 2023/08/28 - postcard 안에 들어갈 양식 - jh */
export interface vblogListType {
  ContentId: number;
  ContentDate: string;
  ContentTitle: string;
  Content: string;
  Heart: number;
  Review: number;
  UserName: string;
  Hashtags: string[];
}