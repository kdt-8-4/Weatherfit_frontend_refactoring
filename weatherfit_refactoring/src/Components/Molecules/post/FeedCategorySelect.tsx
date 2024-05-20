'use client'

import { CategoryData } from '@/Store/CategoryData'
import { CategorySelectData } from '@/Store/CategorySelectData'
import { useContext, useEffect, useState } from 'react'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import { FeedData } from '@/Store/FeedData'
import { WeatherContext } from '../../../../contexts/WeatherContext'
import { CategoryControl } from '@/Store/CategoryControl'

export default function FeedCategorySelect() {
  const { setFeedData } = FeedData()
  const { categoryData } = CategoryData()
  const { tempMax, tempMin, setTempMax, setTempMin } =
    useContext(WeatherContext)
  const { setCategoryControl } = CategoryControl()
  const { selectData, setSelectData } = CategorySelectData()

  const [categoryTitleStyle, setCategoryTitleStyle] = useState<string>('')
  const [categoryList, setCategoryList] = useState<SelecList[]>([])
  const [localTempMax, setLocalTempMax] = useState<number | null>(null)
  const [localTempMin, setLocalTempMin] = useState<number | null>(null)

  //카테고리에 맞춰서 하위 카테고리 불러오기
  const selectCategory = (selectedCategory: string) => {
    console.log('선택한 카테고리 타이틀', selectedCategory)
    const filtering: TabMenu[] = categoryData.filter(
      categorydata => categorydata.value == selectedCategory,
    )
    setCategoryList(filtering[0].selectLists)
  }

  //하위 카테고리 선택시 검색 데이터에 넣기
  const categorySearch = (inputData: string) => {
    if (!selectData.includes(inputData)) {
      setSelectData([...selectData, inputData])
    }
  }

  //검색 데이터에서 삭제 버튼을 누른 카테고리 없애기
  const selectCancle = (selectCancle: string) => {
    const filterCansleCategory: string[] = selectData.filter(
      selectdata => selectdata != selectCancle,
    )
    console.log('삭제할 카테고리', selectCancle)
    setSelectData(filterCansleCategory)
  }

  const tempFileter = (searchResponse: FEEDDATA[]) => {
    // console.log('받은 데이터', searchResponse)
    // console.log('온도', tempMax, tempMin)
    // console.log('로컬 온도', localTempMax, localTempMin)

    let max: number = tempMax || 40
    let min: number = tempMin || -20

    if (localTempMax !== null) {
      max = localTempMax
    }

    if (localTempMin !== null) {
      min = localTempMin
    }

    console.log('필터에 적용할 온도', max, min)
    if (max !== null && min !== null) {
      console.log(searchResponse)

      const filterByTemp = searchResponse.filter(
        searchData =>
          searchData.temperature >= min && searchData.temperature <= max,
      )

      console.log('온도 적용', filterByTemp)
      setFeedData(filterByTemp)
    }
  }

  const searchCategory = async () => {
    console.log('실행', selectData)
    let url: string = 'https://www.jerneithe.site/board/search?categories='
    const selectDataToList = selectData.join(',')
    url += selectDataToList

    console.log(url)
    const callSearchData = await fetch(url, {
      method: 'GET',
    })

    const callSearchDataToJson: FEEDDATA[] = await callSearchData.json()

    console.log('카테고리 검색 데이터', callSearchDataToJson)

    if (localTempMax !== null) {
      setTempMax(localTempMax)
    }

    if (localTempMin !== null) {
      setTempMin(localTempMin)
    }

    tempFileter(callSearchDataToJson)
    setCategoryControl(false)
  }

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000066] z-[100] flex justify-center items-center">
      <div className="absolute bottom-0 z-50 bg-white w-[390px] h-[610px] rounded-[10px]">
        {/* 카테고리 헤더 */}
        <section className="text-center font-neurimboGothic mt-2 mb-[10px]">
          <button
            onClick={() => setCategoryControl(false)}
            className="mr-[150px]">
            Ｘ
          </button>
          <span className="mr-[140px]">카테고리</span>
        </section>

        <hr />

        {/* 카테고리 리스트 */}
        <section>
          <section className=" flex whitespace-nowrap space-x-6 mx-8 mt-3 font-gmarketsans">
            {categoryData.map(categoryTitle => {
              return (
                <button
                  key={categoryTitle.id}
                  onClick={() => selectCategory(categoryTitle.value)}
                  className={categoryTitleStyle}>
                  {categoryTitle.title}
                </button>
              )
            })}
          </section>

          {/* 카테고리 하위 목록 */}
          <section className="h-[385px]">
            {categoryList &&
              categoryList.map(categoryList => {
                return (
                  <button
                    key={categoryList.list_id}
                    className="m-2 p-1 border-[1px] rounded-lg border-black  font-NanumSquareRound"
                    onClick={() => categorySearch(categoryList.selectList)}>
                    {categoryList.selectList}
                  </button>
                )
              })}
          </section>
        </section>

        {/* 온도 설정 */}
        <section className="flex m-2">
          <p
            className=" font-neurimboGothic whitespace-nowrap"
            tabIndex={0}
            aria-label="원하는 온도에 맞는 코디를 보기위해 온도를 설정하는 요소입니다. 입력하지 않을 시 현재 온도 그대로 적용됩니다.">
            온도 설정 :{' '}
          </p>
          <InputStore
            inputStyle={InputStyle.INPUT_WHITE}
            onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLocalTempMax(parseInt(e.target.value))
            }
            value={localTempMax || ''}
            placeholderContents="최고온도를 입력해주세요."
            style=" w-[70px] h-[30px] text-[13px] ml-2 mr-1"
          />
          <span className=" font-neurimboGothic">℃</span>
          <InputStore
            inputStyle={InputStyle.INPUT_WHITE}
            onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLocalTempMin(parseInt(e.target.value))
            }
            value={localTempMin || ''}
            placeholderContents="최저온도를 입력해주세요."
            style=" w-[70px] h-[30px] text-[13px] ml-2 mr-1"
          />
          <span className=" font-neurimboGothic">℃</span>
        </section>

        {/* 선택한 카테고리 목록 */}
        <section
          className="flex overflow-x-auto h-[50px]"
          tabIndex={0}
          aria-label="선택한 카테고리를 확인할 수 있습니다.">
          {selectData.map((data, index) => {
            return (
              <p
                key={index}
                className=" whitespace-nowrap m-2 p-1 border-[1px] rounded-lg border-black  font-NanumSquareRound"
                tabIndex={0}
                aria-label={`${data}`}>
                {data}
                <button
                  onClick={() => selectCancle(data)}
                  className="ml-2"
                  aria-label="선택한 카테고리 취소 버튼">
                  {' '}
                  x
                </button>
              </p>
            )
          })}
        </section>

        {/* 카테고리 버튼 */}
        <section className=" font-gmarketsans flex">
          <button
            className=" bg-white w-[25%]  border-[1px] ml-2 mr-1 p-1"
            onClick={() => setSelectData([])}>
            초기화
          </button>
          <button
            className="bg-blue-300 w-[70%] text-white mr-1 p-1"
            onClick={searchCategory}>
            선택 카테고리 검색하기
          </button>
        </section>
      </div>
    </div>
  )
}
