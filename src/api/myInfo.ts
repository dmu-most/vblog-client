import instance from '@api/axiosInstance';

// type
import { MyInfoType, RecentResponseType } from 'types/myInfo';

// ============================ 회원정보 ============================
/** 2023/09/13 - 회원정보 GET 요청 - by sineTlsl */
export const getMyInfo = async () => {
  const { data } = await instance.get<MyInfoType>('/users/info', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

// ============================ 최근목록 ============================
/** 2023/09/26 - 최근목록 Vlog GET 요청 - by sineTlsl */
export const getRecentVlog = async () => {
  const { data } = await instance.get<RecentResponseType>('/myinfo/vlog/recently', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/09/26 - 최근목록 Blog GET 요청 - by sineTlsl */
export const getRecentBlog = async () => {
  const { data } = await instance.get<RecentResponseType>('/myinfo/blog/recently', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};
