'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import { MouseEventHandler } from 'react'

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
  return (
    <div className="flex items-center justify-between h-[50px] my-[10px]">
      <IconStore
        iconStyle={IconStyle.PREV2}
        size={20}
        style={'ml-[10px] cursor-pointer'}
        onClickFunction={() => window.history.back()}
      />
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        children={title}
        style="px-2 h-[30px] font-neurimboGothic text-[22px] pb-[5px] shadow-[7px_7px_1px] flex items-center"
      />
      {iconStyleCase ? (
        <IconStore
          iconStyle={iconStyleCase}
          size={17}
          style={'mr-[10px] cursor-pointer'}
          onClickFunction={onClickFunction2}
        />
      ) : buttonStyleCase ? (
        <ButtonStore
          buttonStyle={buttonStyleCase}
          style={'mr-[10px] font-NanumSquareRound text-xs'}
          btnText={btnText}
          onClickFunction={onClickFunction}
        />
      ) : null}
    </div>
  )
}
