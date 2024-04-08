import FeedSearchSort from '@/Components/Organisms/feed/FeedSearchSort'
import FeedContents from '@/Components/Molecules/post/FeedContents'
import NavBar from '@/Components/Molecules/bar/NavBar'
import localFeedData from '../../../public/dummy_data/feedData.json'
import getBase64 from '@/utils/image_lazy_loding/getBase64'

export default async function Feedpage() {
  // 게시물 관련 백엔드 복구 시 사용
  const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
    method: 'GET',
    cache: 'force-cache',
  })

  const feedContentsData: FEEDDATA[] = await feedDataFetch.json()
  // console.log(feedContentsData)
  //임시 데이터
  // const feedContentsData: FEEDDATA[] = localFeedData

  // 받아온 데이터에서 이미지를 블러 이미지로 변환해 준 후
  // boardId와 함께 배열에 넣어주기
  const changeImageUrl: Promise<BlurData | null>[] = feedContentsData.map(
    async feedData => {
      if (!feedData.images?.imageUrl) {
        return null // 이미지 URL이 없으면 Promise를 생성하지 않고 넘어감
      }

      const { base64 } = await getBase64(feedData.images.imageUrl)

      return {
        boardId: feedData.boardId,
        blurUrl: base64,
      }
    },
  )

  // // 받아온 Promise 배열을 await으로 풀어주기
  const clearPromise = await changeImageUrl

  // 내부 Promise 객체들을 await으로 풀어주고 blurData에 넣기
  let blurData: BlurData[] = []

  for (let i = 0; i < clearPromise.length; i++) {
    const cleatPromiseOne = await clearPromise[i]
    if (cleatPromiseOne !== null) {
      blurData.push(cleatPromiseOne)
    }
  }

  // 특정 boardId에 해당하는 Blur 이미지를 가져올 수 있도록
  // 사전 자료형으로 만들기
  const blurDataMap: Record<number, string> = {}
  blurData.forEach(item => {
    blurDataMap[item.boardId] = item.blurUrl
  })

  // const blurDataMap: Record<number, string> = {}

  return (
    <div className="flex-2 overflow-y-auto mb-1">
      <FeedSearchSort />
      <FeedContents response={feedContentsData} blurDataMap={blurDataMap} />
      <NavBar />
    </div>
  )
}
