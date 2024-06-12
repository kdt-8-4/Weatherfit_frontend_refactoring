'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { useState } from 'react'
import { FeedData } from '@/Store/FeedData'

// 해시태그 문자열 분해
export const hashToUrlForSearch = (hashValue: string, url: string) => {
  const searchHashtagData: string[] = hashValue
    .split('#')
    .map(tag => {
      return tag.trim()
    })
    .filter(Boolean)

  const combinedHashTags = searchHashtagData.join(',')
  url += combinedHashTags

  return url
}

export default function FeedSearch() {
  const { setFeedData } = FeedData()
  const [hashValue, setHashValue] = useState<string>('')

  let url = 'https://www.jerneithe.site/board/search?hashtags='

  //해시태그 취소
  const hashTagArrayClear = () => {
    setHashValue('')
  }

  // 해시태그 검색
  const searchHashTag = async () => {
    const searchUrl = hashToUrlForSearch(hashValue, url)

    if (searchUrl === url) {
      const feedDataFetch = await fetch(
        'https://www.jerneithe.site/board/list',
        {
          method: 'GET',
          cache: 'force-cache',
        },
      )

      const allfeedData: FEEDDATA[] = await feedDataFetch.json()

      setFeedData(allfeedData)
    }

    if (searchUrl !== url) {
      try {
        const hashSearch = await fetch(searchUrl, {
          method: 'GET',
        })

        const callData = await hashSearch.json()
        console.log('해시태그 검색으로 불러온 데이터', callData)

        setFeedData(callData)
      } catch (error) {
        console.error('에러 발생', error)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      searchHashTag()
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
          placeholderContents="'# + 해시태그' 형식으로 입력하세요"
          style="font-gmarketsans font-thin outline-none text-[14px] w-[85%] h-[38px] mx-1"
        />
        <IconStore
          iconStyle={IconStyle.SEARCH}
          size={16}
          style="mr-[10px]"
          onClickFunction={searchHashTag}
          onKeyDown={handleKeyDown}
          tabindex={0}
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
