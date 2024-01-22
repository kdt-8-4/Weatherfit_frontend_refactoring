'use client'
import { useState } from 'react'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

export default function ProfilePostBar() {
  const [isFeedSelected, setIsFeedSelected] = useState<boolean>(true)

  const handleFeedClike = () => {
    setIsFeedSelected(true)
  }

  const handleLikeClick = () => {
    setIsFeedSelected(false)
  }

  return (
    <>
      <div className="flex justify-evenly my-[10px]">
        <ButtonStore
          buttonStyle={
            isFeedSelected
              ? ButtonStyle.DEFAULT_BTN_FILL
              : ButtonStyle.DEFAULT_BTN
          }
          style="font-neurimboGothic w-[100px]"
          onClickFunction={handleFeedClike}>
          피드
        </ButtonStore>
        <ButtonStore
          buttonStyle={
            !isFeedSelected
              ? ButtonStyle.DEFAULT_BTN_FILL
              : ButtonStyle.DEFAULT_BTN
          }
          style="font-neurimboGothic w-[100px]"
          onClickFunction={handleLikeClick}>
          좋아요
        </ButtonStore>
      </div>
    </>
  )
}
