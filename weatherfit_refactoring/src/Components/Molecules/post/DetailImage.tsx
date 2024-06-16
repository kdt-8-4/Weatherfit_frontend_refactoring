'use client'

import Image from 'next/image'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import { useState } from 'react'
import { handlePrevious, handleNext } from '@/utils/function/utilFunction'

export default function DetailImage({
  images,
}: {
  images: FEEDDATA_detail['images']
}) {
  const [index, setIndex] = useState(0)

  const onPreviousClick = () => handlePrevious(setIndex, images.length)
  const onNextClick = () => handleNext(setIndex, images.length)

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[350px] h-[350px]">
        <Image
          key={images[index].imageId}
          src={images[index].imageUrl}
          layout="fill"
          objectFit="cover"
          sizes="auto"
          alt={`image-${index}`}
          className="rounded-xl"
        />
      </div>
      {images.length > 1 && (
        <div
          className="absolute flex w-full cursor-pointer px-10 justify-between items-center"
          data-testid="image-button">
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
