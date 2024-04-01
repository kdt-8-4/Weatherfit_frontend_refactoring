'use client'

import React, { useState } from 'react'
import ProfilePostBar from '../../Molecules/bar/ProfilePostBar'
import ProfilePost from '../../Molecules/post/ProfilePost'

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
    <section>
      <ProfilePostBar
        onFeedClick={handleFeedClick}
        onLikeClick={handleLikeClick}
      />
      <ProfilePost postData={isFeedSelected ? myPost : myLikePost} />
    </section>
  )
}
