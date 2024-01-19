import Select from '../Molecules/Select'
import { categories } from '@/Components/Atoms/CategoryList'
import { useCallback } from 'react'
import { useStore } from '../Atoms/Store'

export default function SelectCategory() {
  const { initialSubCategories, setSelectedSubCategories } = useStore()

  const handleCategorySelect = useCallback(
    (category: string, subCategories: string[]) => {
      //  setSelectedSubCategories(prev => ({ ...prev, [category]: subCategories }))
    },
    [],
  )

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
