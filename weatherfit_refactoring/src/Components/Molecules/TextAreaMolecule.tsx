'use client'

import { useEffect, useRef } from 'react'
import TextArea from '../Atoms/TextArea'
import { useStore } from '../../Store/Store'
import { extractHashtags } from '@/utils/function/utilFunction'

export default function TextAreaMolecule({
  initContent,
}: {
  initContent?: FEEDDATA_detail['content']
}) {
  const { content, setContent, setHashTag } = useStore()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (initContent) {
      setContent(initContent)
    }
  }, [setContent])

  const handleChange = () => {
    if (textAreaRef.current) {
      const newContent = textAreaRef.current.value || ''
      const hashTag = extractHashtags(newContent) // 해시태그 추출
      setContent(newContent)
      setHashTag(hashTag)
    }
  }

  // 엔터키 인식해서 줄바꿈 가능하게
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const { selectionStart, value } = event.currentTarget
      const newValue =
        value.substring(0, selectionStart) +
        '\n' +
        value.substring(selectionStart)
      setContent(newValue)
      if (textAreaRef.current) {
        textAreaRef.current.value = newValue
        textAreaRef.current.setSelectionRange(
          selectionStart + 1,
          selectionStart + 1,
        )
      }
    }
  }

  return (
    <>
      <TextArea
        textAreaRef={textAreaRef}
        value={content}
        placeholder="코디에 어울리는 글과 #해시태그를 작성해주세요"
        onChangeFunction={handleChange}
        onKeyDownFunction={handleKeyDown}
      />
    </>
  )
}