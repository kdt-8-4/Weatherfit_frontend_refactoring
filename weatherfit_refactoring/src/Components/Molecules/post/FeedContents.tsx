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
    console.log('받아온 feedData', response)
    const copyResponse: FEEDDATA[] = [...response]

    // 현재 온도 맞는 코디 데이터로 필터링
    let filterByTemp: FEEDDATA[]
    if (tempMax && tempMin) {
      filterByTemp = copyResponse.filter(
        copyResponse =>
          copyResponse.temperature >= tempMin &&
          copyResponse.temperature <= tempMax,
      )
    }
    setFeedData(response)
  }, [])

  return (
    <main className={`mt-5 flex flex-wrap relative`}>
      {feedData.map(feedDataArr => {
        return (
          <div key={feedDataArr.boardId}>
            <FeedContent
              DataforFeed={feedDataArr}
              blurDataUrl={blurDataMap[feedDataArr.boardId]}
            />
          </div>
        )
      })}
    </main>
  )
}
