'use client'

import React, { useState } from 'react'
import ProfilePostBar from '../Molecules/ProfilePostBar'
import ProfilePost from '../Molecules/ProfilePost'

interface Props {
  myPost: FEEDDATA[]
  myLikePost: FEEDDATA[]
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
