'use client'

import Image from 'next/image'
import feedDummy from '../../../public/dummy_data/feed.json'

export default function DetailProfile(boardId: BOARDID) {
  const id = boardId.boardId
  const post = feedDummy.feed_data.find(post => post.boardId === Number(id))

  if (!post) {
    return <div>게시물이 삭제되었습니다.</div>
  }

  return (
    <div className="flex items-center font-NanumSquareRound mt-5">
      <Image
        src={post.userImage}
        width={50}
        height={50}
        alt="profile"
        className="rounded-full"
      />
      <div className="flex-col ml-3 pb-1">
        <p className="text-lg">{post.nickName}</p>
        <p className="text-xs text-gray-400">@user_one</p>
        {/* <p className="text-xs text-gray-400">여기 아이디 들어가면 되려나</p> */}
      </div>
    </div>
  )
}
