'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../../Atoms/Box/BoxStore'
import { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
  btnText?: string
  iconStyleCase?: IconStyle
  buttonStyleCase?: ButtonStyle
  onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined
  onClickFunction2?: () => void
}

export default function Header({
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
    <header className="relative flex items-center justify-between h-[50px] m-0 pb-1 bg-white">
      <IconStore
        iconStyle={IconStyle.PREV2}
        size={20}
        style="ml-[10px] cursor-pointer"
        onClickFunction={() => window.history.back()}
      />
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style={`absolute left-1/2 transform -translate-x-1/2 px-2 h-[30px] font-neurimboGothic text-[22px] pb-[7px] shadow-[7px_7px_1px] flex items-center ${title === '옷늘날씨' ? 'cursor-pointer' : ''}`}
        onClickFunction={onClickToMain}>
        {title}
      </BoxStore>
      {buttonStyleCase ? (
        <ButtonStore
          buttonStyle={buttonStyleCase}
          style="mr-[10px] font-NanumSquareRound text-xs"
          onClickFunction={() => onClickFunction}>
          {btnText}
        </ButtonStore>
      ) : iconStyleCase ? (
        <IconStore
          iconStyle={iconStyleCase}
          size={17}
          style="mr-[10px] cursor-pointer"
          onClickFunction={onClickFunction2}
        />
      ) : (
        <div className="hidden"></div>
      )}
    </header>
  )
}
