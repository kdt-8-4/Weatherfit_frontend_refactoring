import { create } from 'zustand'

interface State {
  content: string
  setContent: (content: string) => void
  hashTag: string[]
  setHashTag: (hashTag: string[]) => void
  selectedImages: File[]
  setSelectedImages: (selectedImages: File[]) => void
  existingImages: IMAGE[]
  setExistingImages: (existingImages: IMAGE[]) => void
  selectedSubCategories: { [category: string]: string[] }
  setSelectedSubCategories: (category: string, subCategories: string[]) => void
  initialSubCategories: string[]
  setInitialSubCategories: (initialSubCategories: string[]) => void
  deletedImages: number[]
  setDeletedImages: (imageId: number) => void
}

export const useStore = create<State>(set => ({
  content: '',
  setContent: (content: string) => set(state => ({ ...state, content })),
  hashTag: [],
  setHashTag: (hashTag: string[]) => set(state => ({ ...state, hashTag })),
  selectedImages: [],
  setSelectedImages: (selectedImages: File[]) =>
    set(state => ({ ...state, selectedImages })),
  existingImages: [],
  setExistingImages: (existingImages: IMAGE[]) =>
    set(state => ({ ...state, existingImages })),
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
  setInitialSubCategories: (initialSubCategories: string[]) =>
    set(state => ({
      ...state,
      initialSubCategories,
    })),
  deletedImages: [],
  setDeletedImages(imageId: number) {
    set(state => ({
      deletedImages: [...state.deletedImages, imageId],
    }))
  },
}))
