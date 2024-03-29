import Image from 'next/image'

interface IMAGE {
  boardId: number
  imageId: number
  imageUrl: string
}

interface LIKE {
  likeId: number
  nickName: string
}
interface FEEDATA {
  boardId: number
  images: IMAGE
  likeCount: number
  likelist: LIKE[]
  nickName: string
  temperature: number
  weather: string
  weatherIcon?: string
}

interface Props {
  postData: FEEDDATA[]
}

export default function ProfilePost({ postData }: Props) {
  return (
    <div className="grid grid-rows-[25vh_25vh_25vh] grid-cols-[1fr_1fr_1fr] gap-[1%] p-[10px]">
      {/* {postData.length > 0 ? (
        postData.map(item => (
          <div key={item.boardId} className="rounded-lg">
            {item.images && (
              <Image
                src={item.images.imageUrl}
                alt="게시물 이미지"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        ))
      ) : (
        <>
          <p className="post_box_p">게시물이 없습니다.</p>
        </>
      )} */}
      <div className="bg-[salmon] rounded-lg"></div>
    </div>
  )
}
