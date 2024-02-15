'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { ChangeEventHandler, useEffect, useState } from 'react'

export default function FeedSearch() {
  const [hashValue, setHval] = useState<string>('')

  const searchCancle = () => {
    setHval('')
  }

  const searchHashTag: ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log('검색할 내용', e.target.value)
    setHval(e.target.value)
  }

  useEffect(() => {
    console.log('검색할려고 하는 태그', hashValue)
    hashToArray()
  }, [hashValue])

  const hashToArray = () => {
    const searchHashtagData: string[] = hashValue.split('#').filter(Boolean)
    console.log('해시태그 검색 배열', searchHashtagData)

    let url = 'https://www.jerneithe.site/board/search?categories='

    if (searchHashtagData.length != 0) {
      for (let i = 0; i < searchHashtagData.length; i++) {
        url += searchHashtagData[i]
      }
    }

    console.log('검색 url', url)
  }

  return (
    <div className=" flex py-[10px] px-[10px]">
      <div className="flex border rounded-[9px] mx-1">
        <InputStore
          inputStyle={InputStyle.INPUT_SEARCH}
          placeholderContents="#해시태그를 입력하세요"
          style="font-gmarketsans font-thin outline-none text-[14px] w-[65vw] h-[38px] mx-1"
          value={hashValue}
          onChageFunction={searchHashTag}
        />
        <IconStore iconStyle={IconStyle.SEARCH} size={16} style="mr-[10px]" />
      </div>
      <ButtonStore
        buttonStyle={ButtonStyle.CANCEL_BTN}
        style="font-NanumSquareRound text-gray-500 text-[16px] w-[70px]"
        onClickFunction={searchCancle}>
        취소
      </ButtonStore>
    </div>
  )
}
