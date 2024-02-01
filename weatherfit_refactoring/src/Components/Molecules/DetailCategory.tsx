'use client'

import feedDummy from '../../../public/dummy_data/feed.json'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { categories } from '../data/CategoryList'

export default function DetailCategory(boardId: BOARDID) {
  const id = boardId.boardId
  const post = feedDummy.feed_data.find(post => post.boardId === Number(id))

  if (!post) {
    return <div>게시물이 삭제되었습니다.</div>
  }

  const findParentCategory = (subCategory: string): string | null => {
    for (const [parentCategory, subCategories] of Object.entries(categories)) {
      if (subCategories.includes(subCategory)) {
        return parentCategory
      }
    }
    return null
  }

  const categoryGroups: Record<string, string[]> = post.category.reduce(
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

  const handleSelectCategory = () => {
    // 카테고리 선택한 거 누르면 검색된 페이지로 이동하게
  }

  return (
    <div className="font-NanumSquareRound flex w-screen justify-center bg-stone-200 flex-col p-3">
      {Object.entries(categoryGroups).map(
        ([parentCategory, subCategories], index) => (
          <div key={index} className="m-2 flex items-center">
            <span className="font-bold text-[16px] mr-3">{parentCategory}</span>
            {subCategories.map((subCategory, index) => (
              <ButtonStore
                key={index}
                onClickFunction={handleSelectCategory}
                buttonStyle={ButtonStyle.CATEGORY_BTN_Y}
                style="mr-2">
                {subCategory}
              </ButtonStore>
            ))}
          </div>
        ),
      )}
    </div>
  )
}