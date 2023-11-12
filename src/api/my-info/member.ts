import instance from '@api/axiosInstance';

// type
import { MyInfoType, MyInfoPatchRequest } from 'types/index';

// ============================ 회원정보 ============================
/** 2023/09/13 - 회원정보 GET 요청 - by sineTlsl */
export const getMyInfo = async () => {
  const { data } = await instance.get<MyInfoType>('/users/info');

  return data;
};

/** 2023/10/15 - 회원정보 이름 PATCH 요청 - by sineTlsl */
export const patchMyInfoName = async (body: MyInfoPatchRequest) => {
  const { data } = await instance.patch<MyInfoType>('/myinfo/users/name', body);

  return data;
};

/** 2023/10/15 - 회원정보 이미지 PATCH 요청 - by sineTlsl */
export const patchMyInfoImage = async (formData: FormData) => {
  const { data } = await instance.patch<MyInfoType>('/myinfo/users/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

/** 2023/10/15 - 회원정보 이미지 DELETE 요청 - by sineTlsl */
export const deleteMyInfoImage = async () => {
  const { data } = await instance.delete<MyInfoType>('/myinfo/users/image');

  return data;
};

// ============================ 카테고리 ============================
/** 2023/11/11 - 카테고리 post 요청 - by sineTlsl */
export const postUserCategory = async (body: string[]) => {
  const { data } = await instance.post<string[]>('/options', body);

  return data;
};

/** 2023/11/11 - 카테고리 patch 요청 - by sineTlsl */
export const patchUserCategory = async (body: string[]) => {
  const { data } = await instance.patch<string[]>('/myinfo/options', body);

  return data;
};

/** 2023/11/11 - 카테고리 get 요청 - by sineTlsl */
export const getUserCategory = async () => {
  const { data } = await instance.get<string[]>('/options');

  return data;
};
