import FeedContent from '../Molecules/FeedContent'
import { FeedData } from '@/Store/FeedData'

export default async function FeedContents() {
  // const {feedData ,setFeedData} = FeedData()
  
  const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
    method: 'GET',
  })  
  const feedContentsData: FEEDDATA[] = await feedDataFetch.json()

  return (
    <div className="mt-5 flex flex-wrap relative">
      {feedContentsData.map(feedDataArr => {
        return (
          <div key={feedDataArr.boardId}>
            <FeedContent feedData={feedDataArr} />
          </div>
        )
      })}
    </div>
  )
}
