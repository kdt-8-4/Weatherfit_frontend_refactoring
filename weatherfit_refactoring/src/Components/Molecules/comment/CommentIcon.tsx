'use client'
import { useState } from 'react'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import CommentModal from './CommentModal'

export default function CommentIcon() {
  const [showComment, setShowComment] = useState<boolean>(false)

  const onClickComment = () => {
    setShowComment(!showComment)
  }
  return (
    <>
      <IconStore
        iconStyle={IconStyle.COMMENTS}
        size={25}
        onClickFunction={onClickComment}
      />
      {showComment && <CommentModal onClickFunction={onClickComment} />}
    </>
  )
}
