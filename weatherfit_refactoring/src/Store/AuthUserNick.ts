import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthUserNick {
  userNick: string | null
  setUserNick: (userNick: string | null) => void
}

export const AuthUserNickStore = create(
  persist<AuthUserNick>(
    set => ({
      userNick: null,
      setUserNick: userNick => {
        set({ userNick })
      },
    }),
    {
      name: 'user_nickname', // 로컬 스토리지 저장 이름
    },
  ),
)