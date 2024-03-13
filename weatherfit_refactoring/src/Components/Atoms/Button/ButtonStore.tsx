import Image from 'next/image'
import { MouseEventHandler } from 'react'

export enum ButtonStyle {
  DEFAULT_BTN = 'DEFAULT_BTN',
  DEFAULT_BTN_BLUE = 'DEFAULT_BTN_BLUE',
  DEFAULT_BTN_FILL = 'DEFAULT_BTN_FILL',
  GOOGLE_BTN = 'GOOGLE_BTN',
  CATEGORY_BTN = 'CATEGORY_BTN',
  CATEGORY_BTN_Y = 'CATEGORY_BTN_Y',
  CATEGORY_BTN_CHECKED = 'CATEGORY_BTN_CHECKED',
  TEXT_BTN = 'TEXT_BTN',
  CONFIRM_BTN = 'CONFIRM_BTN',
  CANCEL_BTN = 'CANCEL_BTN',
  CATEGORY_BTN_TOP = 'CATEGORY_BTN_TOP',
}

interface Props {
  buttonStyle: ButtonStyle
  fontsize?: string //회원가입 버튼에서 사용 회원가입 다 만들고 크기가 지정됐다면 그냥 지정해주고 없애주세요
  style?: string
  onClickFunction?: () =>
    | Promise<void>
    | void
    | MouseEventHandler<HTMLButtonElement>
    | undefined
  children?: React.ReactNode
  btnType?: 'button' | 'reset' | 'submit' | undefined
}

export default function ButtonStore({
  buttonStyle,
  children,
  onClickFunction,
  style,
  btnType,
}: Props) {
  const selectButton = (): React.ReactNode => {
    switch (buttonStyle) {
      case ButtonStyle.DEFAULT_BTN:
        return (
          <button
            className={`${style} bg-white border border-black rounded-2xl z-10`}
            style={{ boxShadow: '7px 7px 1px' }}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.DEFAULT_BTN_BLUE:
        return (
          <button
            className={`${style} border bg-A8C6EC border-black rounded-2xl z-10`}
            style={{ boxShadow: '7px 7px 1px' }}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.DEFAULT_BTN_FILL:
        return (
          <button
            className={`${style} bg-yellow-200 border border-black rounded-2xl z-10`}
            style={{ boxShadow: '7px 7px 1px' }}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.CATEGORY_BTN:
        return (
          <button
            className={`${style} bg-white border border-black rounded-2xl `}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.CATEGORY_BTN_Y:
        return (
          <button
            className={`${style} bg-yellow-200 border border-black rounded-2xl pb-[5px]`}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.CATEGORY_BTN_CHECKED:
        return (
          <button
            className={`${style} bg-blue-300 border border-blue-300 text-white rounded-2xl px-2 py-0.5`}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.CATEGORY_BTN_TOP:
        return (
          <button
            className={`${style} bg-blue-300 border border-blue-300 rounded-2xl px-1.5 py-0.5`}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.CONFIRM_BTN:
        return (
          <button
            className={`${style} bg-yellow-200 border border-black rounded-lg`}
            onClick={onClickFunction}
            type={btnType}>
            {children}
          </button>
        )
      case ButtonStyle.CANCEL_BTN:
        return (
          <button
            className={`${style} bg-yellow-200 border border-gray-500 rounded-[9px]`}
            onClick={onClickFunction}>
            {children}
          </button>
        )
      case ButtonStyle.GOOGLE_BTN:
        return (
          <button
            className={` ${style} bg-white border border-black rounded-lg p-2`}
            onClick={onClickFunction}>
            <div className="flex m-auto" style={{ width: '230px' }}>
              <Image
                src={'/google.svg'}
                alt="구글"
                width={19}
                height={19}></Image>
              <div className=" ml-2 pt-1">Google 계정으로 시작하기</div>
            </div>
          </button>
        )
      case ButtonStyle.TEXT_BTN:
        return (
          <button className={`${style}`} onClick={onClickFunction}>
            {children}
          </button>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
