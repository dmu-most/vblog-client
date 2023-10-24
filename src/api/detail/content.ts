import instance from '@api/axiosInstance';

import { CommonResponseType } from 'types/index';

// ============================ 최근목록 ============================
/** 2023/10/23 - 최근목록 post 요청 - by sineTlsl */
export const postRecentItem = async (contentId: number) => {
  const { data } = await instance.post<CommonResponseType>(
    `/click/${contentId}`,
    {},
    {
      headers: {
        'Only-Authorization': true,
      },
    },
  );

  return data;
};
