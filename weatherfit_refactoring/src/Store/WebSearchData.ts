import { create } from 'zustand'

interface WebSearchData {
  webSearchData: FEEDDATA[] | null
  setWebSearchData: (resSearchData: FEEDDATA[]) => void
}

export const WebSearchData = create<WebSearchData>(set => ({
  webSearchData: null,
  setWebSearchData: resSearchData => {
    set(() => ({ webSearchData: resSearchData }))
  },
}))
