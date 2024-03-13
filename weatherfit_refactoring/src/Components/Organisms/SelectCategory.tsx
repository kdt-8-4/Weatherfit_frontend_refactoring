'use client'

import Select from '../Molecules/Select'
import { categories } from '@/Components/data/CategoryList'
import { useCallback } from 'react'
import { useStore } from '../../Store/Store'

export default function SelectCategory({
  initCategory,
}: {
  initCategory?: FEEDDATA_detail['category']
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
          initialSelectedSubCategories={initCategory}
          onSelect={selectedSubCategories =>
            handleCategorySelect(category, selectedSubCategories)
          }
        />
      ))}
    </div>
  )
}
