'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../../Atoms/Box/BoxStore'
import { MouseEventHandler, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CheckStore } from '@/Store/Check'
import { LoadingStore } from '@/Store/Loading'
import { AuthTokenStore } from '@/Store/AuthToken'
import { loginCheck, logout } from '@/utils/function/utilFunction'

interface Props {
  title: string
}

export default function MainHeader({ title }: Props) {
  const { loading, setLoading } = LoadingStore()
  const { accesstoken, setAccessToken } = AuthTokenStore()
  const { check, setCheck } = CheckStore()

  useEffect(() => {
    setAccessToken()
    loginCheck(accesstoken, setCheck, setLoading)
  }, [accesstoken])
  const router = useRouter()

  console.log(`토큰: ${accesstoken} 체크: ${check}`)

  const onClickToMain =
    title === '옷늘날씨' ? () => router.push('/') : undefined // 또는 다른 함수

  return (
    <header className="relative flex items-center justify-between min-h-[50px] my-1 pb-1">
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style={`absolute left-1/2 transform -translate-x-1/2 px-2 h-[30px] font-neurimboGothic text-[22px] pb-[7px] shadow-[7px_7px_1px] flex items-center ${title === '옷늘날씨' ? 'cursor-pointer' : ''}`}
        onClickFunction={onClickToMain}>
        {title}
      </BoxStore>
      {check ? (
        <ButtonStore
          buttonStyle={ButtonStyle.TEXT_BTN}
          style="absolute right-[19px] font-gmarketsans text-black mt-[7px]"
          onClickFunction={logout}>
          로그아웃
        </ButtonStore>
      ) : (
        <Link
          href={`/login`}
          className="absolute right-[19px] font-gmarketsans text-black mt-[7px]">
          로그인
        </Link>
      )}
    </header>
  )
}
