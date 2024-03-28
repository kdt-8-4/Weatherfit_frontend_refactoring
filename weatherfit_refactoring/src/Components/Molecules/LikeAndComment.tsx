'use client'

// import { useStore } from '@/Store/Store'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import CommentIcon from './CommentIcon'
import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserNickStore } from '@/Store/AuthUserNick'

export default function LikeAndComment({ 
    boardId,
    likelist
  }: { 
    boardId: BOARDID;
    likelist: LIKE[];
  }) {
  // const { isLiked, toggleLikeState } = useStore()
  const { accesstoken } = AuthTokenStore()
  const { userNick } = AuthUserNickStore()

  const likeChecker = ( likelist:LIKE[], nickName:string | null ) => {
    if( likelist.some((list) => list.nickName === nickName ) ) {
      return true
    } else {
      return false
    }
  }

  const isUserLiked:boolean = likeChecker( likelist, userNick ); 


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
      // toggleLikeState()
      // 이 부분 만나서 이야기해봐용
    } catch (error) {
      console.error('좋아요 실패:', error)
    }
  }

  return (
    <div className="flex">
      <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
        <IconStore
          iconStyle={isUserLiked ? IconStyle.LIKE : IconStyle.UNLIKE}
          size={25}
        />
      </div>
      <CommentIcon />
    </div>
  )
}
