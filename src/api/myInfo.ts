import instance from '@api/axiosInstance';

// type
import { MyInfoType, MyInfoPatchRequest, RecentResponseType } from 'types/myInfo';

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

/** 2023/10/15 - 회원정보 이름 PATCH 요청 - by sineTlsl */
export const patchMyInfoName = async (body: MyInfoPatchRequest) => {
  const { data } = await instance.patch<MyInfoType>('/myinfo/users/name', body, {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/15 - 회원정보 이미지 PATCH 요청 - by sineTlsl */
export const patchMyInfoImage = async (formData: FormData) => {
  const { data } = await instance.patch<MyInfoType>('/myinfo/users/image', formData, {
    headers: {
      'Only-Authorization': true,
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

/** 2023/10/15 - 회원정보 이미지 DELETE 요청 - by sineTlsl */
export const deleteMyInfoImage = async () => {
  const { data } = await instance.delete<MyInfoType>('/myinfo/users/image', {
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
