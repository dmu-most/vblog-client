// ============================ content Props 공통 ============================
export interface MyContentListProps {
  mode: string;
}
export type MyContentMode = '브이로그' | '블로그';

// ============================ 스크랩 ============================
/** 2023/11/12 - 스크랩 게시글 타입 - by sineTlsl */
export interface ScrapBoardsType {
  id: number;
  writer: string;
  title: string;
  link: string;
  thumbnails: string;
  description: string;
  createdDate: string;
  hashtag: string;
}

/** 2023/10/23 - 스크랩 응답 Type - sineTlsl */
export interface ScrapResponseType {
  id: number;
  name: string;
  type: string;
  userId: number;
  boards: ScrapBoardsType[];
}

// ============================ 최근목록 ============================
/** 2023/10/25 - 최근목록 조회 Type - sineTlsl */
export interface RecentContent {
  id: number;
  writer: string;
  title: string;
  link: string;
  description: string;
  thumbnails: string;
  hashtag: string;
  createdDate: string;
}

// ============================ 리뷰 ============================
export interface ReviewContent {
  reviewId: number;
  content: string;
  createdDate: string;
  grade: number;
  category: string;
  boardId: number;
  title: string;
}

/** 2023/10/15 - 리뷰 조회 Type - sineTlsl */
export interface ReviewResponseType {
  content: ReviewContent[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

/** 2023/10/25 - 리뷰 PUT 요청 타입 - sineTlsl */
export interface ReviewPutRequest {
  reviewContent: string;
  grade: number;
}
