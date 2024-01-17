import Image from 'next/image'
import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  LegacyRef,
} from 'react'

export enum InputStyle {
  INPUT_WHITE = 'INPUT_WHITE',
  INPUT_IMAGE = 'INPUT_IMAGE',
  INPUT_TEXTAREA = 'INPUT_TEXTAREA',
}

interface Props {
  inputStyle: InputStyle
  placeholderContents?: string
  value?: string
  textAreaRef?: LegacyRef<HTMLTextAreaElement> | undefined
  style?: string
  onChageFunctionInput?: FormEventHandler<HTMLDivElement> | undefined
  onChangeFunctionTextArea?: ChangeEventHandler<HTMLTextAreaElement>
  onFocusFunctionTextArea?: FocusEventHandler<HTMLTextAreaElement>
  onKeyDownFunctionTextArea?: KeyboardEventHandler<HTMLTextAreaElement>
}

export default function InputStore({
  inputStyle,
  placeholderContents,
  value,
  textAreaRef,
  style,
  onChageFunctionInput,
  onChangeFunctionTextArea,
  onFocusFunctionTextArea,
  onKeyDownFunctionTextArea,
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
            onChange={onChageFunctionInput}>
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
            className="w-full h-[125px] text-xs align-text-top border rounded-lg bg-white border-gray-500 p-2 font-NanumSquareRound"
            ref={textAreaRef}
            rows={6}
            value={value}
            placeholder={placeholderContents}
            onFocus={onFocusFunctionTextArea}
            onKeyDown={onKeyDownFunctionTextArea}
            onChange={onChangeFunctionTextArea}
          />
        )
      default:
        return null
    }
  }

  return <>{selectInput()}</>
}
