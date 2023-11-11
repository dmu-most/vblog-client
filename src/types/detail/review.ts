// ============================ detail ============================
/** 2023/08/28 - detail 안에 review에 들어갈 타입 - jh */
export interface vblogReviewType {
  contentId: number;
  reviewId: number;
  reviewContent: string;
  reviewDate: string;
  userName: string;
  grade: number;
}

/** 2023/08/28 - detail 안에 review 작성 Form type - jh */
export interface ReviewFormRequest {
  reviewContent: string;
  grade: number;
}