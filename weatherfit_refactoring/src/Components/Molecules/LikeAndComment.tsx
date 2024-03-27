'use client'

import { useStore } from '@/Store/Store'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import CommentIcon from './CommentIcon'
import { AuthTokenStore } from '@/Store/AuthToken'

export default function LikeAndComment({ boardId }: { boardId: BOARDID }) {
  const { isLiked, toggleLikeState } = useStore()
  const { accesstoken } = AuthTokenStore()

  const toggleLike = async () => {
    try {
      const response = await fetch(
        `https://www.yourwebsite.com/board/like/${boardId}`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + accesstoken,
          },
        },
      )
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      toggleLikeState()
    } catch (error) {
      console.error('좋아요 실패:', error)
    }
  }

  return (
    <div className="flex">
      <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
        <IconStore
          iconStyle={isLiked ? IconStyle.LIKE : IconStyle.UNLIKE}
          size={25}
        />
      </div>
      <CommentIcon />
    </div>
  )
}
