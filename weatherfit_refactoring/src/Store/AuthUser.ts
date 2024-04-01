import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthUser {
  userEmail: string | null
  setUserEmail: (userEmail: string | null) => void
}

export const AuthUserStore = create(
  persist<AuthUser>(
    set => ({
      userEmail: null,
      setUserEmail: userEmail => {
        set({ userEmail })
      },
    }),
    {
      name: 'user_email', // 로컬 스토리지 저장 이름
    },
  ),
)
