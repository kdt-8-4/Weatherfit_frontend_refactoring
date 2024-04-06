'use client'

import { useContext, useEffect, useState } from 'react'
import FeedContent from './FeedContent'
import { FeedData } from '@/Store/FeedData'
import { WeatherContext } from '../../../../contexts/WeatherContext'

interface Props {
  response: FEEDDATA[]
  blurDataMap: Record<number, string>
}

export default function FeedContents({ response, blurDataMap }: Props) {
  const { feedData, setFeedData } = FeedData()
  const { tempMax, tempMin } = useContext(WeatherContext)

  useEffect(() => {
    console.log('')

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
        <div className=" font-Cafe24SsurroundAir m-auto text-center">
          <p>현재 온도에 맞는 게시물이 없습니다.</p>
          <br />
          <p>카테고리에서</p>
          <p>온도를 조절하여 원하는 코디를 확인하세요..!</p>
          <br />
          <p className=" text-[12px] text-gray-600">
            ※ 모든 코디를 보고 싶다면 해시태그 검색을 이용해주세요. ※
          </p>
        </div>
      )}
    </main>
  )
}
