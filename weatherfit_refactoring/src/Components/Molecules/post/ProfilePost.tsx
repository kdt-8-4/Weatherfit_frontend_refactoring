import TextStore, { TextStyle } from '@/Components/Atoms/Text/TextStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  postData: FEEDDATA[]
}

export default function ProfilePost({ postData }: Props) {
  const router = useRouter()

  const goDetail = async (board_id: number) => {
    localStorage.setItem('getBoardId_local', JSON.stringify(board_id))
    router.push('/detail')
  }
  return (
    <>
      {postData.length > 0 ? (
        <div className="relative grid auto-rows-[180px] grid-cols-[1fr_1fr_1fr] gap-[3px] p-[10px]">
          {postData.map(item => (
            <div
              key={item.boardId}
              className="relative w-full h-full cursor-pointer"
              onClick={() => goDetail(item.boardId)}>
              {item.images && (
                <Image
                  src={item.images.imageUrl}
                  alt="게시물 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <TextStore
          textStyle={TextStyle.CAFE_TEXT}
          style="pt-[10%] text-center text-lg font-bold">
          게시물이 없습니다.
        </TextStore>
      )}
    </>
  )
}
