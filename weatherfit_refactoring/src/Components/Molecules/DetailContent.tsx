'use client'

import feedDummy from '../../../public/dummy_data/feed.json'

export default function DetailContent(boardId: BOARDID) {
  const id = boardId.boardId
  const post = feedDummy.feed_data.find(post => post.boardId === Number(id))

  if (!post) {
    return <div>게시물이 삭제되었습니다.</div>
  }

  const handleHashTagClick = (hashTag: string) => {
    console.log('Clicked hashtag:', hashTag)
  }

  const extractAndStyleHashtags = (content: string) => {
    const hashTagRegex = /#[^\s#]+/g
    const splitContent = content.split(hashTagRegex)
    const matchedHashTags = content.match(hashTagRegex) || []

    const result: (string | JSX.Element)[] = []

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
        const tagIndex = post.hashTag.indexOf(currentHashTag.slice(1))

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
    <div className="font-NanumSquareRound flex space-x-3">
      <div className="font-semibold">{post.nickName}</div>
      {/* 추후에 더보기 접기 버튼 넣어야 할 듯 */}
      <div className="break-all text-justify w-full">
        {extractAndStyleHashtags(post.content)}
      </div>
    </div>
  )
}
