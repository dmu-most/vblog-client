import instance from '@api/axiosInstance';

import { vblogListType } from "types/main/list";

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

// ============================ 사용자 알고리즘 조회 ===============================================
/** 2023/10/13 - 사용자 알고리즘 조회 - by jh */
export const getUserCardCheck = async () => {
  const { data } = await instance.get<vblogListType[]>('/vlog/userBase', {
    headers: {
       'Authorization': true,
       'Refresh': true,
    },
  });

  return data;
};
