import instance from '@api/axiosInstance';

// type
import { vblogType } from "types/detail/vblog";

// ============================ 브블로그 컨텐츠 조회 ===============================================

/** 2023/10/13 - 브블로그 전체 컨텐츠 조회 - by jh */
export const getContentCheck = async (contentId: number) => {
  const { data } = await instance.get<vblogType[]>(`/board/${contentId}`, {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};