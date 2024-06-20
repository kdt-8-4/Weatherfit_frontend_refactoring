'use client'

import { Suspense, useContext, useEffect } from 'react'
import FeedContent from './FeedContent'
import { FeedData } from '@/Store/FeedData'
import { WebSearchData } from '@/Store/WebSearchData'
import { WeatherContext } from '../../../../contexts/WeatherContext'

interface Props {
  response: FEEDDATA[]
  blurDataMap: Record<number, string>
}

export default function FeedContents({ response, blurDataMap }: Props) {
  const { feedData, setFeedData } = FeedData()
  const { tempMax, tempMin } = useContext(WeatherContext)
  const { webSearchData } = WebSearchData()

  useEffect(() => {
    const copyResponse: FEEDDATA[] = [...response]

    // 현재 온도 맞는 코디 데이터로 필터링
    if (tempMax && tempMin) {
      const filterByTemp = copyResponse.filter(
        copyResponse =>
          copyResponse.temperature >= tempMin &&
          copyResponse.temperature <= tempMax,
      )
      setFeedData(filterByTemp)
    }
    if (tempMax === null && tempMin === null) {
      setFeedData(response)
    }
  }, [])

  useEffect(() => {
    if (webSearchData !== null) {
      setFeedData(webSearchData)
    }
  }, [webSearchData])

  return (
    <main className={`mt-5 flex flex-wrap relative`}>
      {feedData.length > 0 ? (
        feedData.map(feedDataArr => {
          return (
            <div key={feedDataArr.boardId}>
              <FeedContent
                DataforFeed={feedDataArr}
                blurDataUrl={blurDataMap[feedDataArr.boardId]}
              />
            </div>
          )
        })
      ) : (
        <Suspense
          fallback={
            <div className="m-auto text-center" tabIndex={0}>
              <p>현재 온도와 일치하는 게시물이 없습니다.</p>
              <br />
              <p>카테고리와 온도를 조절하여</p>
              <p>원하는 코디를 확인해 보세요.</p>
              <br />
              <p className=" text-[12px] text-gray-600">
                ※ 검색창의 돋보기를 누르면 모든 코디를 확인할 수 있습니다 ※
              </p>
            </div>
          }>
          <div
            className="font-Cafe24SsurroundAir m-auto text-center"
            tabIndex={0}>
            <p>현재 온도와 일치하는 게시물이 없습니다.</p>
            <br />
            <p>카테고리와 온도를 조절하여</p>
            <p>원하는 코디를 확인해 보세요.</p>
            <br />
            <p className=" text-[12px] text-gray-600">
              ※ 검색창의 돋보기를 누르면 모든 코디를 확인할 수 있습니다 ※
            </p>
          </div>
        </Suspense>
      )}
    </main>
  )
}
