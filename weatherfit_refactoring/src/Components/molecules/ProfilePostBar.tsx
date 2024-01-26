'use client'
import { useEffect, useState } from 'react'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

interface Props {
  onFeedClick: () => void
  onLikeClick: () => void
}

export default function ProfilePostBar({ onFeedClick, onLikeClick }: Props) {
  const [isFeedSelected, setIsFeedSelected] = useState<boolean>(true)

  useEffect(() => {
    isFeedSelected ? onFeedClick() : onLikeClick()
  }, [isFeedSelected])

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
