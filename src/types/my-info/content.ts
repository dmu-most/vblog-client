// ============================ content Props 공통 ============================
export interface MyContentListProps {
  mode: string;
}
export type MyContentMode = '브이로그' | '블로그';

// ============================ 최근목록 ============================
/** 2023/10/22 - 최근목록 조회 Type - sineTlsl */
export interface RecentListItem {
  title: string;
  link: string;
  description: string;
}

/** 2023/10/15 - 최근목록 응답 Type - sineTlsl */
export interface RecentResponseType {
  data: RecentListItem[];
}

// ============================ 리뷰 ============================
export interface ReviewContent {
  reviewId: number;
  content: string;
  createdDate: string;
  userId: null;
  grade: number;
  category: string;
  boardId: number;
}
interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

/** 2023/10/15 - 리뷰 조회 Type - sineTlsl */
export interface ReviewResponseType {
  content: ReviewContent[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}
