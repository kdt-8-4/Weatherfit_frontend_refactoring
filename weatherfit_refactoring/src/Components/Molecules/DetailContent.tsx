'use client'

export default function DetailContent({
  nickName,
  content,
  hashTag,
}: {
  nickName: string
  content: FEEDDATA_detail['content']
  hashTag: FEEDDATA_detail['hashTag']
}) {
  const handleHashTagClick = (hashTag: string) => {
    console.log('Clicked hashtag:', hashTag)
  }

  const extractAndStyleHashtags = (content: string) => {
    const hashTagRegex = /#[^\s#]+/g
    const splitContent = content.split(hashTagRegex)
    const matchedHashTags = content.match(hashTagRegex) || []

    const result: JSX.Element[] = []

    splitContent.forEach((current, index) => {
      const replacedContent = current
        .replace(/\n/g, '<br />')
        .replace(/ /g, '&nbsp;')

      result.push(
        <span
          key={`content-${index}`}
          dangerouslySetInnerHTML={{ __html: replacedContent }} // HTML 문자열을 설정하여 줄바꿈 인식
        />,
      )

      if (index !== splitContent.length - 1) {
        const currentHashTag = matchedHashTags[index]
        const tagIndex = hashTag.indexOf(currentHashTag.slice(1))

        result.push(
          <span
            key={`hashtag-${index}`}
            className={tagIndex !== -1 ? 'text-blue-400 cursor-pointer' : ''}
            onClick={() => handleHashTagClick(currentHashTag)}>
            {currentHashTag}
          </span>,
        )
      }
    })

    return result
  }

  return (
    <div className="font-NanumSquareRound px-1 break-all text-justify w-full">
      {/* 추후에 더보기 접기 버튼 넣어야 할 듯 */}
      <span className="font-extrabold mr-2">{nickName}</span>
      {extractAndStyleHashtags(content)}
    </div>
  )
}
