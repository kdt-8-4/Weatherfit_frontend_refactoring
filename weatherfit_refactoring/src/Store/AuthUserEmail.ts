import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserEmailStore {
  userEmail: string | null
  setUserEmail: (userEmail: string | null) => void
}

const AuthUserEmailStore = create(
  persist<UserEmailStore>(
    (set, get) => ({
      userEmail: null,
      setUserEmail: (userEmail: string | null) =>
        set(() => ({ userEmail: userEmail })),
    }),
    {
      name: 'user_email',
    },
  ),
)

export default AuthUserEmailStore
