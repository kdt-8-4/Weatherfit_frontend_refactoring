import FeedSearchSort from '@/Components/Organisms/feed/FeedSearchSort'
import FeedContents from '@/Components/Molecules/post/FeedContents'
import NavBar from '@/Components/Molecules/bar/NavBar'

export default async function Feedpage() {
  const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
    method: 'GET',
  })

  const feedContentsData: FEEDDATA[] = await feedDataFetch.json()

  return (
    <>
      <FeedSearchSort />
      <FeedContents response={feedContentsData} />
      <NavBar />
    </>
  )
}
