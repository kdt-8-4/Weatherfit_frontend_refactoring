'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { FeedData } from '@/Store/FeedData'

export default function FeedSearch() {
  const { feedData, setFeedData } = FeedData()
  const [hashValue, setHashValue] = useState<string>('')

  let url = 'https://www.jerneithe.site/board/search?hashtags='

  //해시태그 취소
  const hashTagArrayClear = () => {
    setHashValue('')
  }

  // 해시태그 문자열 분해
  const hashToArray = () => {
    const searchHashtagData: string[] = hashValue.split('#').filter(Boolean)
    console.log('해시태그 검색 배열', searchHashtagData)

    const combinedHashTags = searchHashtagData.join(',')
    url += combinedHashTags

    console.log('검색 url', url)
  }

  // 해시태그 검색
  const searchHashTag = async () => {
    hashToArray()

    try {
      const hashSearch = await fetch(url, {
        method: 'GET',
      })

      const callData = await hashSearch.json()
      console.log('해시태그 검색으로 불러온 데이터', callData)

      setFeedData(callData)
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  return (
    <article className=" flex py-[10px] px-[10px]">
      <div className="flex border rounded-[9px] mx-1 w-[300px]">
        <InputStore
          value={hashValue}
          onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHashValue(e.target.value)
          }
          inputStyle={InputStyle.INPUT_SEARCH}
          inputType="text"
          placeholderContents="#해시태그를 입력하세요"
          style="font-gmarketsans font-thin outline-none text-[14px] w-[85%] h-[38px] mx-1"
        />
        <IconStore
          iconStyle={IconStyle.SEARCH}
          size={16}
          style="mr-[10px]"
          onClickFunction={searchHashTag}
        />
      </div>
      <ButtonStore
        buttonStyle={ButtonStyle.CANCEL_BTN}
        style="font-NanumSquareRound text-gray-500 text-[16px] w-[70px]"
        onClickFunction={hashTagArrayClear}>
        취소
      </ButtonStore>
    </article>
  )
}
