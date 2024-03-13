'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Props {
  title: string
  btnText?: string
  iconStyleCase?: IconStyle
  buttonStyleCase?: ButtonStyle
  onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined
  onClickFunction2?: () => void
}

export default function MainHeader({
  title,
  btnText,
  iconStyleCase,
  buttonStyleCase,
  onClickFunction,
  onClickFunction2,
}: Props) {
  const router = useRouter()

  const onClickToMain =
    title === '옷늘날씨' ? () => router.push('/') : undefined // 또는 다른 함수

  return (
    <div className="relative flex items-center justify-between h-[50px] my-1 pb-1">
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style={`absolute left-1/2 transform -translate-x-1/2 px-2 h-[30px] font-neurimboGothic text-[22px] pb-[7px] shadow-[7px_7px_1px] flex items-center ${title === '옷늘날씨' ? 'cursor-pointer' : ''}`}
        onClickFunction={onClickToMain}>
        {title}
      </BoxStore>
      <Link
        href={`/login`}
        className="absolute right-[19px] font-gmarketsans text-black">
        로그인
      </Link>
    </div>
  )
}
