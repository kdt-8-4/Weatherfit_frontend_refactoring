import Image from 'next/image'
import feedDummy from '../../../public/dummy_data/feed.json'

export default function DetailImage(boardId: BOARDID) {
  const id = boardId.boardId
  const post = feedDummy.feed_data.find(post => post.boardId === Number(id))

  if (!post) {
    return <div>게시물이 삭제되었습니다.</div>
  }

  return (
    <div className="flex justify-center">
      {post.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={100}
          height={100}
          alt={`image-${index}`}
          className="rounded-xl m-2"
        />
      ))}
    </div>
  )
}
