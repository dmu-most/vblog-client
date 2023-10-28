import create from 'zustand';

// ... (other imports and interfaces)

interface LikeDislikeStore {
  isLiked: boolean;
  isDisliked: boolean;
  localSaveLike: () => void;
  localSaveDislike: () => void;
}

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

