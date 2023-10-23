import instance from '@api/axiosInstance';

import { RecentListItem, ReviewResponseType } from 'types/my-info';

// ============================ 최근목록 ============================
/** 2023/10/15 - 최근목록 Vlog GET 요청 - by sineTlsl */
export const getRecentVlog = async (page: number) => {
  const { data } = await instance.get<RecentListItem[]>('/myinfo/recently/vlog', {
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
  const { data } = await instance.get<RecentListItem[]>('/myinfo/recently/blog', {
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
