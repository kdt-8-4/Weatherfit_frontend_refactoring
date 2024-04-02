import FeedSearchSort from '@/Components/Organisms/feed/FeedSearchSort'
import FeedContents from '@/Components/Molecules/post/FeedContents'
import NavBar from '@/Components/Molecules/bar/NavBar'
import localFeedData from '../../../public/dummy_data/feedData.json'

export default async function Feedpage() {
  // 게시물 관련 백엔드 복구 시 사용
  // const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
  //   method: 'GET',
  // })

  // const feedContentsData: FEEDDATA[] = await feedDataFetch.json()

  //임시 데이터
  const feedContentsData: FEEDDATA[] = localFeedData
  return (
    <div className="flex-2 overflow-y-auto mb-1">
      <FeedSearchSort />
      <FeedContents response={feedContentsData} />
      <NavBar />
    </div>
  )
}
