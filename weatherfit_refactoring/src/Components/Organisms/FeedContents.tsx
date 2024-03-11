'use client'

import { useEffect, useState } from 'react';
import FeedContent from '../Molecules/FeedContent'
import { FeedData } from '@/Store/FeedData'

interface Props {
  response : FEEDDATA[]
}

export default function FeedContents({response}:Props) {
  const {feedData, setFeedData} = FeedData()

  useEffect(() => {
    console.log("받아온 feedData", response)
    setFeedData(response)
  }, []);

  return (
    <div className="mt-5 flex flex-wrap relative">
      {feedData.map(feedDataArr => {
        return (
          <div key={feedDataArr.boardId}>
            <FeedContent feedData={feedDataArr} />
          </div>
        )
      })}
    </div>
  )
}
