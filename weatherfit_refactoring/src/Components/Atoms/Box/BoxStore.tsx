import Image from 'next/image'
import { MouseEventHandler } from 'react'

export enum BoxStyle {
  BOX_WHITE = 'BOX_WHITE',
  BOX_YELLOW = 'BOX_YELLOW',
  BOX_BLUE = 'BOX_BLUE',
  BOX_IMAGE = 'BOX_IMAGE',
}

interface Props {
  title?: string
  boxStyle: BoxStyle
  style?: string
  onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined
  children?: React.ReactNode
}
//높이 조정도 필요하면 가져다 쓰세요

export default function ButtonStore({
  boxStyle,
  children,
  onClickFunction,
  style,
}: Props) {
  const selectButton = (): React.ReactNode => {
    switch (boxStyle) {
      case BoxStyle.BOX_WHITE:
        return (
          <button
            className={`${style} bg-white border border-black rounded-2xl `}>
            {children}
          </button>
        )
      case BoxStyle.BOX_YELLOW:
        return (
          <div className={`${style} bg-yellow-200 border-black rounded-2xl `}>
            {children}
          </div>
        )
      case BoxStyle.BOX_BLUE:
        return (
          <div className={`${style} bg-blue-300 rounded-2xl`}>{children}</div>
        )
      case BoxStyle.BOX_IMAGE:
        return (
          <div className="border rounded-2xl w-32 h-48 bg-stone-200 flex hover:bg-stone-300 relative  flex-shrink-0">
            {children}
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
