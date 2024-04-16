import { create } from 'zustand'

interface WebSearchData {
  webSearchData: FEEDDATA[]
  setWebSearchData: (resSearchData: FEEDDATA[]) => void
}

export const WebSearchData = create<WebSearchData>(set => ({
  webSearchData: [],
  setWebSearchData: resSearchData => {
    set(() => ({ webSearchData: resSearchData }))
  },
}))
