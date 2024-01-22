'use client'

import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  LegacyRef,
} from 'react'

interface Props {
  placeholder: string
  value: string
  textAreaRef?: LegacyRef<HTMLTextAreaElement> | undefined
  onChangeFunction?: ChangeEventHandler<HTMLTextAreaElement>
  // onFocusFunction?: FocusEventHandler<HTMLTextAreaElement>
  onKeyDownFunction?: KeyboardEventHandler<HTMLTextAreaElement>
}

export default function TextArea({
  textAreaRef,
  value,
  placeholder,
  onChangeFunction,
  // onFocusFunction,
  onKeyDownFunction,
}: Props) {
  return (
    <>
      <textarea
        className="w-full h-[125px] text-xs align-text-top border rounded-lg bg-white border-slave-500 p-2 font-NanumSquareRound resize-none mb-7 placeholder-gray-500"
        ref={textAreaRef}
        rows={6}
        value={value}
        placeholder={placeholder}
        onChange={onChangeFunction}
        // onFocus={onFocusFunction}
        onKeyDown={onKeyDownFunction}
      />
    </>
  )
}
