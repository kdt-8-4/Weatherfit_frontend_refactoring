import Image from 'next/image'
import { FormEventHandler } from 'react'

export enum InputStyle {
  INPUT_WHITE = 'INPUT_WHITE',
  INPUT_IMAGE = 'INPUT_IMAGE',
  INPUT_TEXTAREA = 'INPUT_TEXTAREA',
}
//INPUT_IMAGE는 크기 고정이라서 여기 아톰에서 w-40랑 h-64 수정해주면 돼요

interface Props {
  inputStyle: InputStyle
  placeholderContents?: string
  style?: string
  onChageFunction?: FormEventHandler<HTMLDivElement> | undefined
}

export default function InputStore({
  inputStyle,
  placeholderContents,
  onChageFunction,
  style,
}: Props) {
  const selectInput = (): React.ReactNode => {
    switch (inputStyle) {
      case InputStyle.INPUT_WHITE:
        return (
          <input
            type="text"
            className={`border rounded-lg bg-white border-gray-500 p-1 ${style}`}
            placeholder={placeholderContents}
          />
        )
      case InputStyle.INPUT_IMAGE:
        return (
          <div
            className="border rounded-2xl w-32 h-48 bg-stone-200 flex cursor-pointer hover:bg-stone-300"
            onChange={onChageFunction}>
            <Image
              className="m-auto"
              src={'/icon_svg/add.svg'}
              alt="add"
              width={20}
              height={20}
            />
            <input className="hidden" type="file" accept="image/*" multiple />
          </div>
        )
      case InputStyle.INPUT_TEXTAREA:
        return (
          <textarea
            // ref={textAreaRef}
            rows={6}
            // value={text}
            placeholder={placeholderContents}
            // onFocus={handleFocus}
            // onKeyDown={handleKeyDown}
            className="w-full h-[125px] text-sm align-text-top border rounded-lg bg-white border-gray-500 p-2"
            // onChange={handleInputChange}
          />
        )
      default:
        return null
    }
  }

  return <>{selectInput()}</>
}
