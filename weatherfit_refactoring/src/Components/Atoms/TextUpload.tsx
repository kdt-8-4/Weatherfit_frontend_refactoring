'use client'

import { useRef } from 'react'
import InputStore, { InputStyle } from './Input/InputStore'
import { create } from 'zustand'

interface State {
  text: string
  setText: (content: string) => void
}

const useStore = create<State>(set => ({
  text: '',
  setText: (content: string) => set(state => ({ ...state, text: content })),
}))

export default function TextUpload() {
  const placeholderContents = '코디와 같이 올리고 싶은 #해시태그를 작성해주세요'
  const { text, setText } = useStore()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  // 엔터키 인식해서 줄바꿈 가능하게
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const { selectionStart, value } = event.currentTarget
      const newValue =
        value.substring(0, selectionStart) +
        '\n' +
        value.substring(selectionStart)
      setText(newValue)
      if (textAreaRef.current) {
        textAreaRef.current.value = newValue
        textAreaRef.current.setSelectionRange(
          selectionStart + 1,
          selectionStart + 1,
        )
      }
    }
  }

  const extractHashtags = (content: string): string[] => {
    const regex = /#(\S+)/g // # 다음에 공백이 아닌 모든 문자를 해시태그로 간주하는 정규식
    const matches = content.match(regex)
    if (matches) {
      // 매칭된 해시태그들을 반환
      return matches.map(match => match.substring(1)) // #을 제외한 문자열 반환
    }
    return []
  }
  const handleFocus = () => {
    if (
      textAreaRef.current &&
      textAreaRef.current.value === placeholderContents
    )
      setText('')
  }

  // 현재 textarea에 갓 있으면,
  const handleChange = () => {
    if (textAreaRef.current) {
      const content = textAreaRef.current.value || ''
      const hashtags = extractHashtags(content) // 해시태그 추출
      setText(content)
    }
  }

  return (
    <>
      <InputStore
        inputStyle={InputStyle.INPUT_TEXTAREA}
        placeholderContents={placeholderContents}
        textAreaRef={textAreaRef}
        value={text}
        onKeyDownFunctionTextArea={handleKeyDown}
        onChangeFunctionTextArea={handleChange}
        onFocusFunctionTextArea={handleFocus}
      />
    </>
  )
}
