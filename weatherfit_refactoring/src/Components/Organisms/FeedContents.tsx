'use client'

import { useEffect, useState } from 'react';
import FeedContent from '../Molecules/FeedContent'
import { FeedData } from '@/Store/FeedData'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'

interface Props {
  response : FEEDDATA[]
}

export default function FeedContents({response}:Props) {
  const {feedData, setFeedData} = FeedData()
  const { temperatureMin } = WeatherTempMin()
  const { temperatureMax } = WeatherTempMax()


  useEffect(() => {
    console.log("받아온 feedData", response)
    const copyResponse:FEEDDATA[] =  [...response]
    const filterByTemp = copyResponse.filter(
      (copyRes) => 
       copyRes.temperature >= temperatureMin &&
       copyRes.temperature <= temperatureMax
    )
    setFeedData(response)
  }, []);

  return (
    <div className="mt-5 flex flex-wrap relative">
      {feedData.map(feedDataArr => {
        return (
          <div key={feedDataArr.boardId}>
            <FeedContent DataforFeed={feedDataArr} />
          </div>
        )
      })}
    </div>
  )
}
