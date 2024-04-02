'use client'

import Select from './Select'
import { categories } from '@/Components/data/CategoryList'
import { useCallback } from 'react'
import { useStore } from '../../../Store/Store'

export default function SelectCategory({
  initCategory,
  mode,
}: {
  initCategory?: FEEDDATA_detail['category']
  mode: 'edit' | 'upload'
}) {
  const { setSelectedSubCategories } = useStore()

  const handleCategorySelect = useCallback(
    (category: string, subCategories: string[]) => {
      setSelectedSubCategories(category, subCategories)
    },
    [setSelectedSubCategories],
  )

  return (
    <div className="my-7">
      {Object.entries(categories).map(([category, subCategories]) => (
        <Select
          key={category}
          category={category}
          subCategories={subCategories}
          initialSelectedSubCategories={
            mode === 'edit' ? initCategory : undefined
          }
          onSelect={selectedSubCategories =>
            handleCategorySelect(category, selectedSubCategories)
          }
        />
      ))}
    </div>
  )
}
