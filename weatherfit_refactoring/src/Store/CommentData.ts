import { create } from 'zustand'

interface CommentStore {
  comments: CommentType[]
  setComments: (comments: CommentType[]) => void
}

export const CommentData = create<CommentStore>(set => ({
  comments: [],
  setComments: comments => set(() => ({ comments })),
}))
