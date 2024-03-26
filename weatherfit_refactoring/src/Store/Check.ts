import { create } from 'zustand'

interface Check {
  check: boolean
  setCheck: (check: boolean) => void
}

export const CheckStore = create<Check>(set => ({
  check: false,
  setCheck: check => {
    set({ check })
  },
}))
