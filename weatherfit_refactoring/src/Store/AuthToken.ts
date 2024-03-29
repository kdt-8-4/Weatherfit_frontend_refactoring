import { create } from 'zustand'
import Cookies from 'js-cookie'

interface AuthToken {
  accesstoken: string | undefined
  setAccessToken: () => void
}

export const AuthTokenStore = create<AuthToken>(set => ({
  accesstoken: undefined,
  setAccessToken: () => set({ accesstoken: Cookies.get('accessToken') }),
}))
