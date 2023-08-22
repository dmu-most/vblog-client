import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Token {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearTokens: () => void;
}

type StateSetter = (partialState: Partial<Token>) => void;

/** 2023/08/21 - 로컬스토리지에 액세스 토큰 저장 - by sineTlsl */
const setAccessToken = (set: StateSetter) => (accessToken: string) => {
  set({ accessToken });
};

/** 2023/08/21 - 로컬스토리지에 리프레시 토큰 저장 - by sineTlsl */
const setRefreshToken = (set: StateSetter) => (refreshToken: string) => {
  set({ refreshToken });
};

/** 2023/08/21 - 로컬스토리지에서 토큰 삭제 - by sineTlsl */
const clearTokens = (set: StateSetter) => () => {
  set({ accessToken: '', refreshToken: '' });
};

/** 2023/08/21 - 토큰 저장소 - by sineTlsl */
const useTokenStore = create(
  persist<Token>(
    set => ({
      accessToken: '',
      refreshToken: '',
      setAccessToken: setAccessToken(set),
      setRefreshToken: setRefreshToken(set),
      clearTokens: clearTokens(set),
    }),
    {
      name: 'token',
      getStorage: () => localStorage,
    },
  ),
);

export { useTokenStore };
