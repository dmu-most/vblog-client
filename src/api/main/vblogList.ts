import instance from '@api/axiosInstance';

import { vblogListType, BannerTags } from 'types/main/list';
import { SearchListRequestType, SearchListType } from 'types/index';

// ============================ vlog banner 조회 ===============================================
/** 2023/10/13 - vlog banner 조회 - by jh */
export const getvlogbannerCheck = async () => {
  const { data } = await instance.get<vblogListType[]>('/vlog/banner', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ blog banner 조회 ===============================================
/** 2023/10/13 - vlog banner 조회 - by jh */
export const getblogbannerCheck = async () => {
  const { data } = await instance.get<vblogListType[]>('/blog/banner', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ vlog bannertag 조회 ===============================================
/** 2023/10/13 - vlog banner 조회 - by jh */
export const getvlogbannerTagCheck = async () => {
  const { data } = await instance.get<BannerTags[]>('/vlog/hashtags', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ blog bannertag 조회 ===============================================
/** 2023/10/13 - vlog banner 조회 - by jh */
export const getblogbannerTagCheck = async () => {
  const { data } = await instance.get<BannerTags[]>('/blog/hashtags', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ vlog bannertag 검색 ===============================================
/** 2023/10/13 - vlog banner 검색 - by jh */
export const getvlogbannerTagSearch = async (params: SearchListRequestType, tag: string) => {
  const { data } = await instance.get<SearchListType[]>('vlog/search/category', {
    params: {
      ...params,
      keyword: tag, // Include the tag in the params object
    },
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ vlog 사용자 알고리즘 조회 ===============================================
/** 2023/10/13 - 사용자 알고리즘 조회 - by jh */
export const getUservlogCardCheck = async () => {
  const { data } = await instance.get<vblogListType[]>('/vlog/userBase');

  return data;
};

// ============================ blog 사용자 알고리즘 조회 ===============================================
/** 2023/10/13 - 사용자 알고리즘 조회 - by jh */
export const getUserblogCardCheck = async () => {
  const { data } = await instance.get<vblogListType[]>('/blog/userBase');

  return data;
};
