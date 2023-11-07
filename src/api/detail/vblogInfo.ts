import instance from '@api/axiosInstance';

// type
import { VblogLikeRequest } from 'types/detail/vblog';

// ============================ 브블로그 좋아요/싫어요  ===============================================
export const PostLikeInfo = async (contentId: number, likeInfo: boolean) => {
  const body: VblogLikeRequest = { likeInfo };

  return await instance.post(`/like/${contentId}`, body);
};
