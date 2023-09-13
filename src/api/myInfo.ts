import instance from '@api/axiosInstance';

// type
import { MyInfoType } from 'types/myInfo';

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
