import { useEffect, useRef } from 'react'
import TextArea from '../Atoms/TextArea'
import { useStore } from '../Atoms/Store'

export default function TextAreaMolecule() {
  const { content, setContent, setHashTags } = useStore()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setContent(content)
  }, [content])

  const extractHashtags = (content: string): string[] => {
    const regex = /#(\S+)/g // # 다음에 공백이 아닌 모든 문자를 해시태그로 간주하는 정규식
    const matches = content.match(regex)
    if (matches) {
      // 매칭된 해시태그들 반환
      return matches.map(match => match.substring(1)) // #을 제외한 문자열 반환
    }
    return []
  }

  // 현재 textarea에 갓 있으면,
  const handleChange = () => {
    if (textAreaRef.current) {
      const newContent = textAreaRef.current.value || ''
      const hashTags = extractHashtags(newContent) // 해시태그 추출
      setContent(newContent)
      setHashTags(hashTags)
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
