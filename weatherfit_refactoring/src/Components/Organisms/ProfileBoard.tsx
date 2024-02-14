'use client'

import React, { useState } from 'react'
import ProfilePostBar from '../Molecules/ProfilePostBar'
import ProfilePost from '../Molecules/ProfilePost'

interface IMAGE {
  boardId: number
  imageId: number
  imageUrl: string
}

interface LIKE {
  likeId: number
  nickName: string
}
interface FEEDATA {
  boardId: number
  images: IMAGE
  likeCount: number
  likelist: LIKE[]
  nickName: string
  temperature: number
  weather: string
  weatherIcon?: string
}

interface Props {
  myPost: FEEDATA[]
  myLikePost: FEEDATA[]
}

export default function ProfileBoard({ myPost, myLikePost }: Props) {
  const [isFeedSelected, setIsFeedSelected] = useState<boolean>(true)

  const handleFeedClick = () => {
    setIsFeedSelected(true)
  }

  const handleLikeClick = () => {
    setIsFeedSelected(false)
  }

  return (
    <>
      <ProfilePostBar
        onFeedClick={handleFeedClick}
        onLikeClick={handleLikeClick}
      />
      <ProfilePost postData={isFeedSelected ? myPost : myLikePost} />
    </>
  )
}
