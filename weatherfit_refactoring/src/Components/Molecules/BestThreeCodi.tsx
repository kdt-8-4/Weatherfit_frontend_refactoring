import Link from 'next/link'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import Image from 'next/image'

export default function BestThreeCodi({ data }: { data?: FEEDDATA_detail }) {
  if (!data || !data.images) {
    return (
      <div className="flex space-x-2 w-full justify-center cursor-pointer">
        <BoxStore boxStyle={BoxStyle.BOX_IMAGE}>
          <Image
            src={'/images/question.bmp'}
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
        <Link href={`feed/detail/${data.boardId}`}>
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
        // 유저 정보
      ))}
    </div>
  )
}

// export default function BestThreeCodi({ data }: { data?: FEEDDATA_detail[] }) {
//   if (!data) {
//     return (
//       <div className="flex space-x-2 w-full justify-center cursor-pointer">
//         <BoxStore boxStyle={BoxStyle.BOX_IMAGE}>
//           <Image
//             src={'../../../public/images/question.bmp'}
//             alt={`없을 경우..`}
//             width={100}
//             height={100}
//             className="w-full h-full object-cover border rounded-2xl"
//           />
//         </BoxStore>
//       </div>
//     )
//   }

//   return (
//     <div className="flex space-x-2 w-full justify-center cursor-pointer">
//       {data.map((item, index) => (
//         <Link key={index} href={`/detail/${item.boardId}`}>
//           <BoxStore boxStyle={BoxStyle.BOX_IMAGE}>
//             <Image
//               src={item.images[0] as unknown as string}
//               alt={`Image ${index}`}
//               width={100}
//               height={100}
//               className="w-full h-full object-cover border rounded-2xl"
//             />
//           </BoxStore>
//         </Link>
//         // 유저 정보
//       ))}
//     </div>
//   )
// }
