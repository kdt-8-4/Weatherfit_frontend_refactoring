import { CategoryData } from '@/Store/CategoryData'
import { CategorySelectData } from '@/Store/CategorySelectData'
import { unstable_getStaticParams } from 'next/dist/build/templates/pages'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import { CategoryControl } from '@/Store/CategoryControl'

export default function FeedCategorySelect() {
  const { categoryData } = CategoryData()
  const { setTempMin } = WeatherTempMin()
  const { setTempMax } = WeatherTempMax()
  const { categoryControl, setCategoryControl } = CategoryControl()
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
    setSelectData([...selectData, inputData])
  }

  //검색 데이터에서 삭제 버튼을 누른 카테고리 없애기
  const selectCancle = (selectCancle: string) => {
    const filterCansleCategory: string[] = selectData.filter(
      selectdata => selectdata != selectCancle,
    )
    console.log('삭제할 카테고리', selectCancle)
    setSelectData(filterCansleCategory)
  }

  const searchCategory = async () => {
    // 상위 컴포넌트에서 함수 받아온후 바로 실행해버리자
    console.log(selectData)
    let url: string = 'https://www.jerneithe.site//board/search?categories='
    for (let i = 0; i < selectData.length; i++) {
      url += selectData[i]
    }
    console.log(url)
    const callSearchData = await fetch(url, {
      method: 'GET',
    })

    const callSearchDataToJson = await callSearchData.json()

    console.log('카테고리 검색 데이터', callSearchDataToJson)

    if (localTempMax != undefined) {
      setTempMax(localTempMax)
    }

    if (localTempMin != undefined) {
      setTempMin(localTempMin)
    }

    setCategoryControl(false)
  }

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000066] z-[100] flex justify-center items-center">
      <div className="absolute top-0 z-50 bg-white w-[400px] h-[600px] rounded-[10px]">
        <section className="text-center font-neurimboGothic my-2">
          <button
            onClick={() => setCategoryControl(false)}
            className="mr-[150px]">
            Ｘ
          </button>
          <span className="mr-[140px]">카테고리</span>
        </section>

        <section>
          <section className=" flex whitespace-nowrap space-x-6 mx-8 font-gmarketsans">
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

          <section className="h-[70vh]">
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

        <section className="flex m-2">
          <p className=" font-neurimboGothic whitespace-nowrap">온도 설정 : </p>
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

        <section className="flex overflow-x-auto h-[50px]">
          {selectData.map((data, index) => {
            return (
              <p
                key={index}
                className=" whitespace-nowrap m-2 p-1 border-[1px] rounded-lg border-black  font-NanumSquareRound">
                {data}
                <button onClick={() => selectCancle(data)} className="ml-2">
                  {' '}
                  x
                </button>
              </p>
            )
          })}
        </section>
        <section className=" font-gmarketsans flex">
          <button
            className=" bg-white w-[25%]  border-[1px] mx-1 p-1"
            onClick={() => setSelectData([])}>
            초기화
          </button>
          <button
            className="bg-blue-300 w-[70%] text-white mx-1 p-1"
            onClick={searchCategory}>
            선택 카테고리 검색하기
          </button>
        </section>
      </div>
    </div>
  )
}
