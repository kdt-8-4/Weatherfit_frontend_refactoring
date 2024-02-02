export const extractHashtags = (content: string): string[] => {
  const regex = /#(\S+)/g // # 다음에 공백이 아닌 모든 문자를 해시태그로 간주하는 정규식
  const matches = content.match(regex)
  if (matches) {
    // 매칭된 해시태그들 반환
    return matches.map(match => match.substring(1)) // #을 제외한 문자열 반환
  }
  return []
}

export const handlePrevious = (
  setIndex: (value: number | ((prevIndex: number) => number)) => void,
  imagesLength: number,
): void => {
  setIndex((prevIndex: number) => {
    if (prevIndex === 0) return imagesLength - 1
    else return prevIndex - 1
  })
}

export const handleNext = (
  setIndex: (value: number | ((prevIndex: number) => number)) => void,
  imagesLength: number,
): void => {
  setIndex((prevIndex: number) => {
    if (prevIndex === imagesLength - 1) return 0
    else return prevIndex + 1
  })
}
