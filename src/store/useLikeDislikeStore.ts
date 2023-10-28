import create from 'zustand';

interface LikeDislikeStore {
  isLiked: boolean;
  isDisliked: boolean;
  localSaveLike: () => void;
  localSaveDislike: () => void;
}

/** 2023/08/18 - 좋아요/싫어요 로컬 저장소(수정 필요) - by jh */
const useLikeDislikeStore = create<LikeDislikeStore>((set) => {
  const initialIsLiked = localStorage.getItem('isLiked') === 'true';
  const initialIsDisliked = localStorage.getItem('isDisliked') === 'true';

  set({ isLiked: initialIsLiked, isDisliked: initialIsDisliked });

  return {
    isLiked: initialIsLiked,
    isDisliked: initialIsDisliked,

    localSaveLike: () => {
      set((state) => {
        const newIsLiked = !state.isLiked;
        const newIsDisliked = false;
        localStorage.setItem('isLiked', newIsLiked.toString());
        localStorage.setItem('isDisliked', 'false');
        return { isLiked: newIsLiked, isDisliked: newIsDisliked };
      });
    },
    localSaveDislike: () => {
      set((state) => {
        const newIsDisliked = !state.isDisliked;
        const newIsLiked = false;
        localStorage.setItem('isLiked', 'false');
        localStorage.setItem('isDisliked', newIsDisliked.toString());
        return { isLiked: newIsLiked, isDisliked: newIsDisliked };
      });
    },
  };
});

export { useLikeDislikeStore };

