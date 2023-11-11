import create from 'zustand';

interface LikeDislikeStore {
  likedContentIds: number[];
  dislikedContentIds: number[];
  toggleLike: (contentId: number) => void;
  toggleDislike: (contentId: number) => void;
}

export const useLikeDislikeStore = create<LikeDislikeStore>((set) => ({
  likedContentIds: [],
  dislikedContentIds: [],
  toggleLike: (contentId: number) => set((state) => {
    const isLiked = state.likedContentIds.includes(contentId);
    if (isLiked) {
      localStorage.removeItem(`like_${contentId}`);
      return { likedContentIds: state.likedContentIds.filter((id) => id !== contentId) };
    } else {
      localStorage.setItem(`like_${contentId}`, 'true');
      localStorage.removeItem(`dislike_${contentId}`);
      return {
        likedContentIds: [...state.likedContentIds, contentId],
        dislikedContentIds: state.dislikedContentIds.filter((id) => id !== contentId),
      };
    }
  }),
  toggleDislike: (contentId: number) => set((state) => {
    const isDisliked = state.dislikedContentIds.includes(contentId);
    if (isDisliked) {
      localStorage.removeItem(`dislike_${contentId}`);
      return { dislikedContentIds: state.dislikedContentIds.filter((id) => id !== contentId) };
    } else {
      localStorage.setItem(`dislike_${contentId}`, 'true');
      localStorage.removeItem(`like_${contentId}`);
      return {
        dislikedContentIds: [...state.dislikedContentIds, contentId],
        likedContentIds: state.likedContentIds.filter((id) => id !== contentId),
      };
    }
  }),
}));
