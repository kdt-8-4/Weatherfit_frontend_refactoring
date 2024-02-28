'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { useEffect, useState } from 'react'
import { useStore } from '../../Store/Store'

interface Props {
  category: string
  subCategories: string[]
  initialSelectedSubCategories?: string[]
  onSelect: (subCategory: string[]) => void
}

export default function Select({
  category,
  subCategories,
  initialSelectedSubCategories,
  onSelect,
}: Props) {
  const { selectedSubCategories, setSelectedSubCategories } = useStore()
  const [dropDown, setDropDown] = useState(false) // 로컬 상태 사용
  const [imageFlipped, setImageFlipped] = useState(false) // 로컬 상태 사용

  useEffect(() => {
    if (initialSelectedSubCategories) {
      setSelectedSubCategories(category, initialSelectedSubCategories)
    }
  }, [initialSelectedSubCategories, setSelectedSubCategories, category])

  const toggleDropDown = () => {
    setDropDown(!dropDown)
    setImageFlipped(!imageFlipped)
  }

  const selectSubCategory = (subCategory: string) => {
    const selected = selectedSubCategories[category] || []
    const index = selected.indexOf(subCategory)

    let updatedSubCategories
    if (index === -1) {
      updatedSubCategories = Array.from(new Set([...selected, subCategory]))
    } else {
      updatedSubCategories = selected.filter(item => item !== subCategory)
    }

    setSelectedSubCategories(category, updatedSubCategories)
    onSelect(updatedSubCategories)
  }

  return (
    <div>
      {/* 상위 카테고리 */}
      <span
        onClick={toggleDropDown}
        className="flex items-center w-max text-sm font-NanumSquareRound my-1.5 cursor-pointer">
        {category}
        <IconStore
          iconStyle={IconStyle.TOGGLE}
          size={10}
          style={`ml-[5px] ${imageFlipped ? 'rotate-180' : ''}`}
        />
      </span>

      {/* 눌렸을 때 하위 카테고리 */}
      {dropDown && (
        <div className="text-xs font-NanumSquareRound">
          {subCategories.map((subCategory, index) => (
            <ButtonStore
              buttonStyle={
                (selectedSubCategories[category] || []).includes(subCategory)
                  ? ButtonStyle.CATEGORY_BTN_CHECKED
                  : ButtonStyle.CATEGORY_BTN_Y
              }
              key={index}
              style="mr-2 my-1.5"
              onClickFunction={() => selectSubCategory(subCategory)}>
              {subCategory}
            </ButtonStore>
          ))}
        </div>
      )}
    </div>
  )
}
