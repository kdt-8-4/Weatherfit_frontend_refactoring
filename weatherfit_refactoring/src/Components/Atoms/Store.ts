import { create } from 'zustand'
import { categories } from './CategoryList'

interface State {
  content: string
  setContent: (content: string) => void
  hashTags: string[]
  setHashTags: (hashTags: string[]) => void
  selectedImages: File[]
  setSelectedImages: (selectedImages: File[]) => void
  selectedSubCategories: { [category: string]: string[] }
  setSelectedSubCategories: (category: string, subCategories: string[]) => void
  initialSubCategories: string[][]
  setInitialSubCategories: () => void
}

export const useStore = create<State>(set => ({
  content: '',
  setContent: (content: string) => set(state => ({ ...state, content })),
  hashTags: [],
  setHashTags: (hashTags: string[]) => set(state => ({ ...state, hashTags })),
  selectedImages: [],
  setSelectedImages: (selectedImages: File[]) =>
    set(state => ({ ...state, selectedImages })),
  // 하위 카테고리 관리
  selectedSubCategories: {},
  setSelectedSubCategories: (category: string, subCategories: string[]) =>
    set(state => ({
      ...state,
      selectedSubCategories: {
        ...state.selectedSubCategories,
        [category]: subCategories,
      },
    })),
  initialSubCategories: [],
  setInitialSubCategories: () =>
    set(state => ({
      ...state,
      initialSubCategories: Array(Object.entries(categories).length).fill([]),
    })),
}))
