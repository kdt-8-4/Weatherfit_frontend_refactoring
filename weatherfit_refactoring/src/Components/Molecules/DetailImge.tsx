'use client'

import Image from 'next/image'
import feedDummy from '../../../public/dummy_data/feed.json'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import { useState } from 'react'
import { handlePrevious, handleNext } from '@/utils/function/utilFunction'

export default function DetailImage(boardId: BOARDID) {
  const id = boardId.boardId
  const post = feedDummy.feed_data.find(post => post.boardId === Number(id))
  const [index, setIndex] = useState(0)

  if (!post) {
    return <div>게시물이 삭제되었습니다.</div>
  }

  const onPreviousClick = () => handlePrevious(setIndex, post.images.length)
  const onNextClick = () => handleNext(setIndex, post.images.length)

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[250px] h-[350px]">
        <Image
          key={post.images[index]}
          src={post.images[index]}
          layout="fill"
          objectFit="cover"
          // width={100}
          // height={100}
          alt={`image-${index}`}
          className="rounded-xl m-2"
        />
      </div>
      {post.images.length > 1 && (
        <div className="absolute flex w-full cursor-pointer px-10 flex justify-between items-center">
          <IconStore
            iconStyle={IconStyle.PREV}
            size={15}
            onClickFunction={onPreviousClick}
          />
          <IconStore
            iconStyle={IconStyle.NEXT}
            size={15}
            onClickFunction={onNextClick}
          />
        </div>
      )}
    </div>
  )
}
