import instance from '@api/axiosInstance';

import { SearchListRequestType, SearchListType } from 'types/index';

// ============================ 검색 ============================
/** 2023/11/08 - 브이로그 게시글 GET 요청 - by sineTlsl */
export const getSearchVlog = async (params: SearchListRequestType) => {
  const { data } = await instance.get<SearchListType[]>('/vlog/search', {
    params,
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

/** 2023/11/08 - 블로그 게시글 GET 요청 - by sineTlsl */
export const getSearchBlog = async (params: SearchListRequestType) => {
  const { data } = await instance.get<SearchListType[]>('/blog/search', {
    params,
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};
