'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { FeedData } from '@/Store/FeedData'

export default function FeedSearch() {
  const { feedData, setFeedData } = FeedData()
  const [hashValue, setHashValue] = useState<string>('')

  let url = 'https://www.jerneithe.site/board/search?categories=?hashtags='

  //해시태그 취소
  const hashTagArrayClear = () => {
    setHashValue('')
  }

  //해시태그 검색 자동완성 << 백엔드 ec2 생성 후 완성 예정
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(e)
      console.log('검색 url', url)
    }

    if (e.key != 'Enter') {
      return
    }
    // const text = e.target.value
  }

  // 해시태그 문자열 분해
  const hashToArray = () => {
    const searchHashtagData: string[] = hashValue.split('#').filter(Boolean)
    //filter(Boolean) 공백 제거
    console.log('해시태그 검색 배열', searchHashtagData)

    for (let i = 0; i < searchHashtagData.length; i++) {
      url += searchHashtagData[i]
    }
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
      console.log('불러온 데이터', callData)
      // if (hashSearch.ok) {
      //     const callData = await hashSearch.json()
      //     setFeedData(callData)
      // } else {
      //     console.error("에러 발생" ,hashSearch.status)
      // }
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  return (
    <div className=" flex py-[10px] px-[10px]">
      <div className="flex border rounded-[9px] mx-1">
        <InputStore
          value={hashValue}
          onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHashValue(e.target.value)
          }
          onKeyDown={handleKeyDown}
          inputStyle={InputStyle.INPUT_SEARCH}
          inputType="text"
          placeholderContents="#해시태그를 입력하세요"
          style="font-gmarketsans font-thin outline-none text-[14px] w-[65vw] h-[38px] mx-1"
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
    </div>
  )
}
