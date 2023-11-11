import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RememberId {
  rememberedId: string | null;
  setRememberedId: (id: string) => void;
  clearRememberedId: () => void;
}

/** 2023/11/07 - 아이디 저장 저장소 - by sineTlsl */
const useRememberIdStore = create(
  persist<RememberId>(
    set => ({
      rememberedId: null,
      setRememberedId: rememberedId => set({ rememberedId }),
      clearRememberedId: () => set({ rememberedId: null }),
    }),
    {
      name: 'rememberedId',
      getStorage: () => localStorage,
    },
  ),
);

export { useRememberIdStore };
