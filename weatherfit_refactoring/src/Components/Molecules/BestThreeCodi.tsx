import Link from 'next/link'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import Image from 'next/image'

export default function BestThreeCodi({ data }: { data?: FEEDDATA_detail }) {
  if (!data || !data.images) {
    return (
      <div className="flex space-x-2 w-full justify-center cursor-pointer">
        <BoxStore boxStyle={BoxStyle.BOX_IMAGE}>
          <Image
            src={''}
            alt={`없을 경우..`}
            width={100}
            height={100}
            className="w-full h-full object-cover border rounded-2xl"
          />
        </BoxStore>
      </div>
    )
  }

  return (
    <div className="flex space-x-2 w-full justify-center cursor-pointer">
      {data.images.map((image, index) => (
        <Link href={`/detail/${data.boardId}`}>
          <BoxStore boxStyle={BoxStyle.BOX_IMAGE} key={index}>
            <Image
              src={image.imageUrl}
              alt={`Image ${index}`}
              width={100}
              height={100}
              className="w-full h-full object-cover border rounded-2xl"
            />
          </BoxStore>
        </Link>
        // 유저 정보 넣어야 함
      ))}
    </div>
  )
}
