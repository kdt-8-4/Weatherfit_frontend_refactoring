'use client'

import Image from 'next/image'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import Link from 'next/link'
import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserNickStore } from '@/Store/AuthUserNick'
import { FeedData } from '@/Store/FeedData'
import { useEffect, useMemo, useState } from 'react'
import { confirmAlert } from '@/utils/function/utilFunction'

interface Props {
  DataforFeed: FEEDDATA
  blurDataUrl: string
}
export default function FeedContent({ DataforFeed, blurDataUrl }: Props) {
  const { feedData, setFeedData } = FeedData()
  const [isUserLiked, setIsUserLiked] = useState<boolean>(false)
  const createDate: string = useMemo(() => {
    const date = new Date(DataforFeed.createDate)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }, [DataforFeed.createDate])
  const { accesstoken } = AuthTokenStore()
  const { userNick } = AuthUserNickStore()

  const likeChecker = (likelist: LIKE[], nickName: string | null) => {
    if (likelist === undefined) {
      return false
    }

    return likelist.some(list => list.nickName === nickName)
  }

  useEffect(() => {
    setIsUserLiked(likeChecker(DataforFeed.likelist, userNick))
  }, [DataforFeed, userNick])

  const clickLike = async () => {
    if (userNick === null) {
      confirmAlert('로그인 후\n 좋아요를 누를 수 있습니다.')
    }

    const sendToLikeAPI = `https://www.jerneithe.site/board/like/${DataforFeed.boardId}`
    try {
      const res = await fetch(sendToLikeAPI, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + accesstoken,
        },
      })

      if (res.ok) {
        console.log('좋아요 변경 성공')
        // 성공적으로 처리된 경우
        //feedData 복사
        const updateFeedData: FEEDDATA[] = [...feedData]

        //해당 컴포넌트에 넘어온 boardId와 일치하는
        const userLikedIndex = updateFeedData.findIndex(
          feed => feed.boardId === DataforFeed.boardId,
        )
        const isLiked = likeChecker(
          updateFeedData[userLikedIndex].likelist,
          userNick,
        )

        if (isLiked) {
          // 사용자 이름이 likelist에 존재하는 경우
          // likeCount 1 감소
          updateFeedData[userLikedIndex].likeCount--
          // likelist에서 사용자 닉네임 제거
          updateFeedData[userLikedIndex].likelist = updateFeedData[
            userLikedIndex
          ].likelist.filter(list => list.nickName !== userNick)
          setIsUserLiked(false)
        } else {
          // 사용자 이름이 likelist에 존재하지 않는 경우
          // likeCount 1 증가
          updateFeedData[userLikedIndex].likeCount++
          // likelist에서 사용자 닉네임 추가
          const listLength = updateFeedData[userLikedIndex].likelist.length
          updateFeedData[userLikedIndex].likelist.push({
            likeId: listLength,
            nickName: userNick,
          })
          setIsUserLiked(true)
        }

        setFeedData(updateFeedData)
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
              <div
                className=" relative w-[40px] h-[40px]"
                tabIndex={0}
                aria-label="코디를 올린 캐스터 정보입니다.">
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
              <div className=" ml-1" tabIndex={0}>
                <p
                  className=" font-Cafe24SsurroundAir text-[13px]"
                  aria-label={`코디를 올린 캐스터 이름 : ${DataforFeed.nickName}`}>
                  {DataforFeed.nickName}
                </p>
                <p
                  className=" font-NanumSquareRound text-[10px]"
                  aria-label={`코디를 올린 날짜 : ${createDate}`}>
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
                aria-label={`코디 정보 ${DataforFeed.category}`}
                sizes="auto"
                fill
                className="border border-black rounded-xl"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                loading="lazy"
              />
            </div>
          </Link>
          <div className="flex justify-between m-auto w-[90%] py-2">
            <div className="flex">
              <div
                className="relative"
                tabIndex={0}
                aria-label="좋아요 버튼입니다.">
                <IconStore
                  iconStyle={isUserLiked ? IconStyle.LIKE : IconStyle.UNLIKE}
                  size={25}
                  style="relative top-[26%]"
                  onClickFunction={clickLike}
                  tabindex={0}
                  onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => {
                    if (e.key === 'Enter') {
                      clickLike()
                    }
                  }}
                />
              </div>
              <div className="relative font-Cafe24SsurroundAir text-[13px]">
                <p className=" absolute top-[50%] translate-y-[-50%] w-[100%] h-auto">
                  {DataforFeed.likeCount}
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              aria-label="해당 코디를 업로드 했을 당시의 온도입니다.">
              <Image
                src={DataforFeed.weatherIcon}
                alt="weatherIcon"
                width={40}
                height={40}
                loading="lazy"
              />
              <div>
                <p
                  className="font-Cafe24SsurroundAir text-xs text-center"
                  tabIndex={0}>
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
