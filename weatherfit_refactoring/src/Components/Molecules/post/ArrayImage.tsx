import Image from 'next/image'
import BoxStore, { BoxStyle } from '../../Atoms/Box/BoxStore'

interface Props {
  index: number
  imageId?: number
  imageUrl: string
  removeImage: (index: number, imageId?: number) => void
}

export default function ArrayImage({
  index,
  imageId,
  imageUrl,
  removeImage,
}: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_IMAGE} key={index}>
      <Image
        src={imageUrl}
        alt={`Image ${index}`}
        width={100}
        height={100}
        className="w-full h-full object-cover border rounded-2xl"
      />
      <button
        className="absolute top-1 right-1.5 text-xs border-none cursor-pointer "
        onClick={() => removeImage(index, imageId)}>
        ❌
      </button>
    </BoxStore>
  )
}
