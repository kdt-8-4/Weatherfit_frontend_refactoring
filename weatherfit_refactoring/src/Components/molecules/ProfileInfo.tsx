import { useState } from 'react'
import PostCount from './PostCount'
import Image from 'next/image'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'

interface Props {
  profileImage: string | null
  userInfo: UserData
  myPost: FEEDDATA[]
  myLikePost: FEEDDATA[]
}

export default function ProfileInfo({
  profileImage,
  userInfo,
  myPost,
  myLikePost,
}: Props) {
  console.log('userInfo: ', userInfo)
  console.log('userImage: ', profileImage)
  return (
    <div className="flex items-center justify-evenly my-[10px]">
      <div className="flex items-center flex-col font-Cafe24SsurroundAir">
        <div className="h-[80px] rounded-[50%] w-[80px]">
          {profileImage == null ? (
            <IconStore
              iconStyle={IconStyle.MY_PROFILE_FILL}
              size={80}
              style="border-[3px] border-solid border-gray rounded-full"
            />
          ) : (
            <Image
              src={profileImage}
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
    </div>
  )
}
