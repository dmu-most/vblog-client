interface Content {
  title: string;
  link: string;
  description: string;
}

// ============================ 최근목록 ============================
/** 2023/10/15 - 최근목록 조회 Type - sineTlsl */
export interface RecentResponseType {
  data: Content[];
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

/** 2023/09/26 - 리뷰 조회 Type - sineTlsl */
export interface ReviewResponseType {
  content: Content[];
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
