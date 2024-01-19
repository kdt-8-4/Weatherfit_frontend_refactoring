'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import { MouseEventHandler } from 'react'

interface Props {
  isIcon: boolean
  title: string
  btnText?: string
  iconStyleCase: IconStyle
  iconStyleCase2?: IconStyle
  buttonStyleCase?: ButtonStyle
  onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Header({
  isIcon,
  title,
  btnText,
  iconStyleCase,
  iconStyleCase2,
  buttonStyleCase,
  onClickFunction,
}: Props) {
  return (
    <div className="flex items-center justify-between h-[50px]">
      <IconStore
        iconStyle={iconStyleCase}
        size={20}
        style={'ml-[10px] cursor-pointer'}
        onClickFunction={() => window.history.back()}
      />
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        children={title}
        style="px-2 h-[30px] font-neurimboGothic text-[22px] pb-[5px] shadow-[7px_7px_1px] flex items-center"
      />
      {isIcon && iconStyleCase2 != null ? (
        <IconStore iconStyle={iconStyleCase2} size={17} style={'mr-[10px]'} />
      ) : buttonStyleCase != null ? (
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
