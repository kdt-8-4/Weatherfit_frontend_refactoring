'use client'

import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { categories } from '../../data/CategoryList'
import { useRouter } from 'next/navigation'

export default function DetailCategory({
  category,
}: {
  category: FEEDDATA_detail['category']
}) {
  const findParentCategory = (subCategory: string): string | null => {
    for (const [parentCategory, subCategories] of Object.entries(categories)) {
      if (subCategories.includes(subCategory)) {
        return parentCategory
      }
    }
    return null
  }

  const categoryGroups: Record<string, string[]> = category.reduce(
    (groups: Record<string, string[]>, subCategory) => {
      const parentCategory = findParentCategory(subCategory)
      if (parentCategory && !groups[parentCategory]) {
        groups[parentCategory] = []
      }
      if (parentCategory) {
        groups[parentCategory].push(subCategory)
      }
      return groups
    },
    {},
  )

  const router = useRouter()

  const handleSelectCategory = async (category: string) => {
    // 카테고리 선택한 거 누르면 검색된 페이지로 이동하게
    console.log('Clicked Category', category)
    const categoryUrl = `https://www.jerneithe.site/board/search?categories=${category}`
    try {
      const callData = await fetch(categoryUrl, {
        method: 'GET',
      })
      const toJson = await callData.json()
      setFeedData(toJson)
      router.push('/feed')
    } catch (error) {
      console.error('데이터 호출 실패', error)
    }
  }

  return (
    <div className="font-NanumSquareRound flex flex-col bg-stone-200 p-3 justify-center w-full">
      {Object.entries(categoryGroups).map(
        ([parentCategory, subCategories], index) => (
          <div key={index} className="m-2 flex items-center">
            <span className="font-bold text-[17px] mr-3">{parentCategory}</span>
            {subCategories.map((subCategory, index) => (
              <ButtonStore
                key={index}
                onClickFunction={() => handleSelectCategory(subCategory)}
                buttonStyle={ButtonStyle.CATEGORY_BTN_Y}
                style="mr-2 text-sm flex px-1.5 py-0.5">
                {subCategory}
              </ButtonStore>
            ))}
          </div>
        ),
      )}
    </div>
  )
}

function setFeedData(toJson: any) {
  throw new Error('Function not implemented.')
}
