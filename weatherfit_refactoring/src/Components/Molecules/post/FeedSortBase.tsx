'use client'
import { FeedSort } from '@/Store/FeedSort'
import { FeedData } from '@/Store/FeedData'

export default function FeedSortBase() {
  const { feedSort, setFeedSort } = FeedSort()
  const { feedData, setFeedData } = FeedData()

  const sortByLikes = () => {
    const sorted = [...feedData].sort((a, b) => b.likeCount - a.likeCount)
    setFeedData(sorted)
  }

  const sortByNewest = () => {
    const sorted = [...feedData].sort((a, b) => {
      const dateA = a.createDate ? new Date(a.createDate) : new Date()
      const dateB = b.createDate ? new Date(b.createDate) : new Date()
      return dateB.getTime() - dateA.getTime() // 최신 날짜 순으로 정렬
    })
    setFeedData(sorted)
  }

  const sortByOldest = () => {
    const sorted = [...feedData].sort((a, b) => {
      const dateA = a.createDate ? new Date(a.createDate) : new Date()
      const dateB = b.createDate ? new Date(b.createDate) : new Date()
      return dateA.getTime() - dateB.getTime() // 오래된 날짜 순으로 정렬
    })
    setFeedData(sorted)
  }

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('정렬할 기준', event.target.value)
    let sortTitle: string = event.target.value

    if (sortTitle == '최신순') {
      setFeedSort('NOW')
      sortByNewest()
    } else if (sortTitle == '추천순') {
      setFeedSort('HOT')
      sortByLikes()
    } else if (sortTitle == '오래된순') {
      setFeedSort('OLD')
      sortByOldest()
    }
  }

  return (
    <section className="flex flex-row-reverse border-b-[1px] py-[5px]">
      <select
        className=" font-NanumSquareRound font-semibold outline-none text-[14px] px-1"
        onChange={handleSort}>
        <option>최신순</option>
        <option>추천순</option>
        <option>오래된순</option>
      </select>
    </section>
  )
}
