// ============================ 회원정보 ============================
/** 2023/09/13 - 회원정보 조회 Type - sineTlsl */
export interface MyInfoType {
  id: number;
  loginId: string;
  username: string;
  imageUrl: string | null;
  socialType: string | null;
}

// ============================ 최근목록 ============================
interface Content {
  title: string;
  link: string;
  description: string;
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

/** 2023/09/26 - 최근목록 조회 Type - sineTlsl */
export interface RecentResponseType {
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
