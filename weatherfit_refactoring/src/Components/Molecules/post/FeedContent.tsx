'use client'

import Image from 'next/image'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import Link from 'next/link'
import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserNickStore } from '@/Store/AuthUserNick'
import { FeedData } from '@/Store/FeedData'
import { useEffect, useState } from 'react'

interface Props {
  DataforFeed: FEEDDATA
  blurDataUrl: string
}
export default function FeedContent({ DataforFeed, blurDataUrl }: Props) {
  const { feedData, setFeedData } = FeedData()
  const date = new Date(DataforFeed.createDate)
  const createDate: string = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  const { accesstoken } = AuthTokenStore()
  const { userNick } = AuthUserNickStore()

  const likeChecker = (likelist: LIKE[], nickName: string | null) => {
    if (likelist.some(list => list.nickName === nickName)) {
      return true
    } else {
      return false
    }
  }

  const isUserLiked: boolean = likeChecker(DataforFeed.likelist, userNick)

  const clickLike = async () => {
    const sendToLikeAPI = `https://www.jerneithe.site/board/like/${DataforFeed.boardId}`
    try {
      const res = await fetch(sendToLikeAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accesstoken,
        },
      })

      if (res.ok) {
        console.log('좋아요 변경 성공')
        // 성공적으로 처리된 경우 추가적인 작업 수행
      } else {
        // throw new Error('Network response was not ok.')
        console.error('좋아요 변경 실패:', res.status)
        // 실패한 경우에 대한 처리
      }
    } catch (error) {
      console.error('좋아요 변경 실패:', error)
    }
  }

  return (
    <>
      {DataforFeed.images && (
        <article className=" bg-E4E4E6 rounded-xl mx-2 my-2 w-[179px] h-[350px]">
          <div className="flex justify-between m-auto w-[90%] py-2">
            <div className="flex">
              <div className=" relative w-[40px] h-[40px]">
                <Image
                  src={
                    'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90'
                  }
                  alt="프로필 사진"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className=" ml-1">
                <p className=" font-Cafe24SsurroundAir text-[13px]">
                  {DataforFeed.nickName}
                </p>
                <p className=" font-NanumSquareRound text-[10px]">
                  {createDate}
                </p>
              </div>
            </div>
          </div>
          <Link href={`feed/detail/${DataforFeed.boardId}`}>
            <div className=" relative m-auto w-[90%] h-[218px]">
              <Image
                src={DataforFeed.images.imageUrl}
                alt="코디 사진"
                sizes="auto"
                fill
                className="border border-black rounded-xl"
                // placeholder="blur"
                // blurDataURL={blurDataUrl}
              />
            </div>
          </Link>
          <div className="flex justify-between m-auto w-[90%] py-2">
            <div className="flex">
              <div className="relative">
                <IconStore
                  iconStyle={isUserLiked ? IconStyle.LIKE : IconStyle.UNLIKE}
                  size={25}
                  style="relative top-[26%]"
                  onClickFunction={clickLike}
                />
              </div>
              <div className="relative font-Cafe24SsurroundAir text-[13px]">
                <p className=" absolute top-[50%] translate-y-[-50%] w-[100%] h-auto">
                  {DataforFeed.likeCount}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={DataforFeed.weatherIcon}
                alt="weatherIcon"
                width={40}
                height={40}
                loading="lazy"
              />
              <div>
                <p className="font-Cafe24SsurroundAir text-xs text-center">
                  {DataforFeed.temperature}℃
                </p>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  )
}
