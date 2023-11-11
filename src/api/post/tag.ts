import instance from '@api/axiosInstance';

// ============================ tag ============================
/** 2023/11/08 - vlog 인기 해쉬태그 get 요청 - by sineTlsl */
export const getTrendTagVlog = async () => {
  const { data } = await instance.get<string[]>('/vlog/hashtags', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

/** 2023/11/08 - blog 인기 해쉬태그 get 요청 - by sineTlsl */
export const getTrendTagBlog = async () => {
  const { data } = await instance.get<string[]>('/blog/hashtags', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};
