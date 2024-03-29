'use client'

import FeedSearchSort from '@/Components/Organisms/FeedSearchSort'
import FeedContents from '@/Components/Organisms/FeedContents'
import NavBar from '@/Components/Molecules/NavBar'
import { useFetchGet } from '@/utils/useFetch/useFetchGet'
import Loading from '@/Components/Organisms/Loading'
import NotFound from '../not-found'

export default function Feedpage() {
  // const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
  //   method: 'GET',
  // })

  // const feedContentsData: FEEDDATA[] = await feedDataFetch.json()

  const feedQueryKey = 'feedContents'
  const feedUrl = 'https://www.jerneithe.site/board/list'
  const feedOption = { method: 'GET' }
  const {
    data: feedContentsData,
    isLoading,
    error,
  } = useFetchGet<FEEDDATA[]>(feedQueryKey, feedUrl, feedOption)

  // if (isLoading) return <Loading />
  // if (error) return <NotFound />

  return (
    <>
      <FeedSearchSort />
      <FeedContents response={feedContentsData} />
      <NavBar />
    </>
  )
}
