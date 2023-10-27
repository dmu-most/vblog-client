import instance from '@api/axiosInstance';

// type
import { VblogLikeRequest } from 'types/detail/vblog';

// ============================ 브블로그 좋아요/싫어요  ===============================================

/** 2023/10/13 - 브블로그 좋아요/싫어요 - by jh */
export const PostLikeInfo = async (contentId: number, body: VblogLikeRequest) => {
  return await instance.post(`/like/${contentId}`, body);
};
