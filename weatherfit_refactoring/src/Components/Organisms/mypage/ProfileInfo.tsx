import { useEffect, useState } from 'react'
import PostCount from '../../Molecules/post/PostCount'
import Image from 'next/image'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import { AuthUserStore } from '@/Store/AuthUser'

interface Props {
  userInfo: UserData
  myPost: FEEDDATA[]
  myLikePost: FEEDDATA[]
}

export default function ProfileInfo({ userInfo, myPost, myLikePost }: Props) {
  return (
    <>
      <article className="flex items-center justify-evenly my-[10px]">
        <div className="flex items-center flex-col font-Cafe24SsurroundAir">
          <div className="h-[80px] rounded-[50%] w-[80px]">
            {userInfo.image == null ? (
              <IconStore
                iconStyle={IconStyle.MY_PROFILE_FILL}
                size={80}
                style="border-[3px] border-solid border-gray rounded-full"
              />
            ) : (
              <Image
                src={userInfo.image}
                alt="프로필 이미지"
                width={80}
                height={80}
                className="rounded-[50%]"
              />
            )}
          </div>
          <p className="font-bold">{userInfo.nickname}</p>
        </div>
        <PostCount title="내 게시물" count={myPost.length} />
        <PostCount title="좋아요 한 게시물" count={myLikePost.length} />
      </article>
    </>
  )
}
