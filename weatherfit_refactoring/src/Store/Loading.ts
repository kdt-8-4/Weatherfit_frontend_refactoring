import { create } from 'zustand'

interface Loading {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const LoadingStore = create<Loading>(set => ({
  loading: true,
  setLoading: loading => {
    set({ loading })
  },
}))
