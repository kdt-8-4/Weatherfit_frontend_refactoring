import { create } from 'zustand'
import Cookies from 'js-cookie'
import { persist } from 'zustand/middleware'

interface AuthToken {
  accesstoken: string | undefined
  setAccessToken: () => void
}

export const AuthTokenStore = create(
  persist<AuthToken>(
    set => ({
      accesstoken: undefined,
      setAccessToken: () => set({ accesstoken: Cookies.get('accessToken') }),
    }),
    {
      name: 'token',
    },
  ),
)
