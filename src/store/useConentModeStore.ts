import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ContentMode = 'V' | 'B';

interface ContentModeStore {
  mode: ContentMode;
  setMode: (newMode: ContentMode) => void;
}

/** 2023/08/18 - Vlog or Blog 모드 선택하는 저장소 - by sineTlsl */
const useContentModeStore = create(
  persist<ContentModeStore>(
    set => ({
      mode: 'V',
      setMode: newMode => set({ mode: newMode }),
    }),
    {
      name: 'useContentModeStore',
      getStorage: () => sessionStorage,
    },
  ),
);

export { useContentModeStore };
