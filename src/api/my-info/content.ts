import instance from '@api/axiosInstance';

import { CommonResponseType, RecentResponseType, ReviewResponseType, ScrapResponseType } from 'types/index';

// ============================ 스크랩 ============================
/** 2023/10/23 - 스크랩 폴더 POST 요청 - by sineTlsl */
export const postScrapFolder = async (name: string, type: string) => {
  const { data } = await instance.post<ScrapResponseType>(
    '/folders',
    { name, type },
    {
      headers: {
        'Only-Authorization': true,
      },
    },
  );

  return data;
};

/** 2023/10/23 - 스크랩 폴더 Vlog GET 요청 - by sineTlsl */
export const getScrapVlog = async () => {
  const { data } = await instance.get<ScrapResponseType>('/myinfo/folders/vlog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/23 - 스크랩 폴더 Blog GET 요청 - by sineTlsl */
export const getScrapBlog = async () => {
  const { data } = await instance.get<ScrapResponseType>('/myinfo/folders/blog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

// ============================ 최근목록 ============================
/** 2023/10/15 - 최근목록 Vlog GET 요청 - by sineTlsl */
export const getRecentVlog = async (page: number) => {
  const { data } = await instance.get<RecentResponseType>('/myinfo/recently/vlog', {
    params: {
      page,
    },
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/15 - 최근목록 Blog GET 요청 - by sineTlsl */
export const getRecentBlog = async (page: number) => {
  const { data } = await instance.get<RecentResponseType>('/myinfo/recently/blog', {
    params: {
      page,
    },
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

// ============================ 리뷰 ============================
/** 2023/10/15 - 리뷰 Vlog GET 요청 - by sineTlsl */
export const getMyReviewVlog = async (page: number) => {
  const { data } = await instance.get<ReviewResponseType>('/myinfo/reviews/vlog', {
    params: {
      page,
    },
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/15 - 리뷰 Blog GET 요청 - by sineTlsl */
export const getMyReviewBlog = async (page: number) => {
  const { data } = await instance.get<ReviewResponseType>('/myinfo/reviews/blog', {
    params: {
      page,
    },
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/23 - 리뷰 DELETE 요청 - by sineTlsl */
export const deleteMyReview = async (reviewId: number) => {
  const { data } = await instance.delete<CommonResponseType>(`/review/${reviewId}`, {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};
