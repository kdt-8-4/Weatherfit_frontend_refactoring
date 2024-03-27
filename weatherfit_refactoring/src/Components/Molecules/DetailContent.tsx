'use client'
import DOMPurify from 'dompurify'
import { FeedData } from '@/Store/FeedData'
import { useRouter } from 'next/navigation'

export default function DetailContent({
  nickName,
  content,
  hashTag,
}: {
  nickName: string
  content: FEEDDATA_detail['content']
  hashTag: FEEDDATA_detail['hashTag']
}) {
  const { setFeedData } = FeedData()
  const router = useRouter()

  const handleHashTagClick = async (hashTag: string) => {
    console.log('Clicked hashtag:', hashTag)
    const hashTagUrl = `https://www.jerneithe.site/board/search?hashtags=${hashTag}`
    try {
      const callData = await fetch(hashTagUrl, {
        method: 'GET',
      })
      const toJson = await callData.json()
      setFeedData(toJson)
      router.push('/feed')
    } catch (error) {
      console.error('데이터 호출 실패', error)
    }
  }

  const extractAndStyleHashtags = (content: string) => {
    const hashTagRegex = /#[^\s#]+/g
    const splitContent = content.split(hashTagRegex)
    const matchedHashTags = content.match(hashTagRegex) || []

    const result: JSX.Element[] = []

    splitContent.forEach((current, index) => {
      const cleanedContent = DOMPurify.sanitize(current)
        .replace(/\n/g, '<br />')
        .replace(/ /g, '&nbsp;')

      result.push(
        <span
          key={`content-${index}`}
          dangerouslySetInnerHTML={{ __html: cleanedContent }} // HTML 문자열을 설정하여 줄바꿈 인식
        />,
      )

      if (index !== splitContent.length - 1) {
        const currentHashTag = matchedHashTags[index]
        const cleanedHashTag = DOMPurify.sanitize(currentHashTag)
        const tagIndex = hashTag.indexOf(cleanedHashTag.slice(1))

        result.push(
          <span
            key={`hashtag-${index}`}
            className={tagIndex !== -1 ? 'text-blue-400 cursor-pointer' : ''}
            onClick={() => handleHashTagClick(cleanedHashTag)}>
            {cleanedHashTag}
          </span>,
        )
      }
    })

    return result
  }

  return (
    <div className="font-NanumSquareRound px-1 break-all text-justify w-full">
      <span className="font-extrabold mr-2">{nickName}</span>
      {extractAndStyleHashtags(content)}
    </div>
  )
}
