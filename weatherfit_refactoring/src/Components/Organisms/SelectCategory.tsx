'use client'

import Select from '../Molecules/Select'
import { categories } from '@/Components/data/CategoryList'
import { useCallback, useEffect } from 'react'
import { useStore } from '../../Store/Store'

export default function SelectCategory({ data }: { data?: FEEDDATA_detail }) {
  const {
    initialSubCategories,
    setInitialSubCategories,
    setSelectedSubCategories,
  } = useStore()

  const handleCategorySelect = useCallback(
    (category: string, subCategories: string[]) => {
      setSelectedSubCategories(category, subCategories)
    },
    [setSelectedSubCategories],
  )

  useEffect(() => {
    if (data && data.category) {
      setInitialSubCategories(data.category.map(item => [item]))
      data.category.forEach((category, index) => {
        setSelectedSubCategories(category, initialSubCategories[index])
      })
    }
    console.log('선택된 값: ', initialSubCategories)
  }, [data, setInitialSubCategories, setSelectedSubCategories])

  return (
    <div className="mt-7">
      {Object.entries(categories).map(([category, subCategories], index) => (
        <Select
          key={category}
          category={category}
          subCategories={subCategories}
          initialSelectedSubCategories={initialSubCategories[index]}
          onSelect={selectedSubCategories =>
            handleCategorySelect(category, selectedSubCategories)
          }
        />
      ))}
    </div>
  )
}
