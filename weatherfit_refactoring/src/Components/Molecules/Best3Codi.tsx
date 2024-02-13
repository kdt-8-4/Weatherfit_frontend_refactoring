import Link from 'next/link'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import Image from 'next/image'

export default function Best3Codi({ data }: { data?: FEEDDATA_detail }) {
  if (!data || !data.images) {
    return null
  }

  return (
    <>
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
    </>
  )
}
