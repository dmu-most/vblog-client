import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MemberInfo {
  imageUrl: string | null;
  username: string | null;
}

interface Member {
  member: MemberInfo | null;
  setMember: (member: MemberInfo | null) => void;
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
