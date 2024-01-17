import { create } from 'zustand'
import { categories } from './CategoryList'
import IconStore, { IconStyle } from './Icon/IconStore'

interface State {
  dropDown: boolean
  imageFlipped: boolean
  selectedSubCategories: string[]
  setDropDown: (dropDown: boolean) => void
  setImageFlipped: (imageFlipped: boolean) => void
  setSelectedSubCategories: (subCategories: string[]) => void
}

const useStore = create<State>(set => ({
  dropDown: false,
  setDropDown: (dropDown: boolean) =>
    set(state => ({ ...state, dropDown: !state.dropDown })),
  imageFlipped: false,
  setImageFlipped: (imageFlipped: boolean) =>
    set(state => ({ ...state, imageFlipped: !state.imageFlipped })),
  selectedSubCategories: [],
  setSelectedSubCategories: (subCategories: string[]) =>
    set(state => ({ ...state, selectedSubCategories: subCategories })),
}))

export default function SelectCategory() {
  const {
    dropDown,
    setDropDown,
    imageFlipped,
    setImageFlipped,
    selectedSubCategories,
    setSelectedSubCategories,
  } = useStore()

  const toggleDropDown = () => {
    setDropDown(!dropDown)
    setImageFlipped(!imageFlipped)
  }

  return (
    <div>
      {Object.entries(categories).map(([category, subCategories], index) => (
        <button onClick={toggleDropDown} className="flex items-center w-max">
          {category}
          <IconStore
            iconStyle={IconStyle.TOGGLE}
            size={10}
            style={`ml-[3px] ${imageFlipped ? 'rotate-180' : ''}`}
          />
        </button>
      ))}
    </div>
  )
}
