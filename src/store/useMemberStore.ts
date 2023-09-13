import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginResponse } from 'types/auth';

interface Member {
  member: LoginResponse | null;
  setMember: (member: LoginResponse | null) => void;
  clearMember: () => void;
}

/** 2023/09/13 - 로그인 응답 (성공) 저장소 - by sineTlsl */
const useMemberStore = create(
  persist<Member>(
    set => ({
      member: null,
      setMember: member => set(state => ({ ...state, member })),
      clearMember: () => set({ member: null }),
    }),
    {
      name: 'member',
      getStorage: () => localStorage,
    },
  ),
);

export { useMemberStore };
