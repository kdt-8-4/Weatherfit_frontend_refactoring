'use client'

import Image from 'next/image'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import { useState } from 'react'
import { handlePrevious, handleNext } from '@/utils/function/utilFunction'

export default function DetailImage({ data }: { data: FEEDDATA_detail }) {
  const [index, setIndex] = useState(0)

  const onPreviousClick = () => handlePrevious(setIndex, data.images.length)
  const onNextClick = () => handleNext(setIndex, data.images.length)

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[250px] h-[350px]">
        <Image
          key={data.images[index].imageId}
          src={data.images[index].imageUrl}
          layout="fill"
          objectFit="cover"
          alt={`image-${index}`}
          className="rounded-xl m-2"
        />
      </div>
      {data.images.length > 1 && (
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
