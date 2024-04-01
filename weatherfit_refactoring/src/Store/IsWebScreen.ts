import { create } from 'zustand'

interface WebScreen {
  isScreenWide: boolean
  setScreenWide: (controlScreenCheck: boolean) => void
}

export const IsWebScreen = create<WebScreen>(set => ({
  isScreenWide: false,
  setScreenWide: controlScreenCheck => {
    set(() => ({ isScreenWide: controlScreenCheck }))
  },
}))
