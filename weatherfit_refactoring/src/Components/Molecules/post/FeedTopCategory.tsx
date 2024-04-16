'use client'
import { useEffect, useState } from 'react'
import BestCategory from '../../../../public/dummy_data/bestcategory.json'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { FeedData } from '@/Store/FeedData'

export default function FeedTopCategory() {
  const { setFeedData } = FeedData()

  // //게시글 백엔드 복구 후 실행
  // const [topCategory, setTopCategory] = useState<string[]>([])

  // const callTopCategory = async () => {
  //   const callTop = await fetch('https://www.jerneithe.site/board/tops', {
  //     method: 'GET',
  //   })
  //   const toJson = await callTop.json()
  //   console.log(toJson)
  //   setTopCategory(toJson.data)
  // }

  //임시 top5 카테고리
  const temporaryTopCategory: string[] = BestCategory.best_category_data

  const [categories, setCategories] = useState([
    ...temporaryTopCategory,
    ...temporaryTopCategory,
    ...temporaryTopCategory,
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setCategories(prev => {
        const first: string[] = prev.slice(0, 5)
        return [...prev.slice(5), ...first]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const gotoCategory = async (restopCategory: string) => {
    console.log('클릭한 카테고리 검색으로 이동')
    const clickCategoryData = await fetch(
      `https://www.jerneithe.site/board/search?categories=${restopCategory}`,
      {
        method: 'GET',
      },
    )
    const clickCategoryDataToJson: FEEDDATA[] = await clickCategoryData.json()
    console.log('받은 탑 카테고리 데이터', clickCategoryDataToJson)
    setFeedData(clickCategoryDataToJson)
  }

  return (
    <section className=" mb-1">
      <div className="m-auto flex ">
        <p
          className=" font-neurimboGothic whitespace-nowrap mx-1.5 w-[120px]"
          tabIndex={0}
          aria-label="오늘의 카테고리 : 현재 제일 많이 사용된 카테고리 top5를 로드합니다. 
          포커싱된 카테고리를 확인하고 보고싶다면 엔터를 눌러주세요.">
          오늘의 카테고리 :
        </p>
        <div className="flex overflow-hidden whitespace-nowrap w-[calc(100px*20)]">
          {categories.map((topcategory, index) => {
            return (
              <ButtonStore
                key={index}
                buttonStyle={ButtonStyle.CATEGORY_BTN_CHECKED}
                style="font-NanumSquareRound mx-1 p-1 w-[100px] h-[30px] relative animate-topCategory"
                onClickFunction={() => gotoCategory(topcategory)}>
                {topcategory}
              </ButtonStore>
            )
          })}
        </div>
      </div>
    </section>
  )
}
