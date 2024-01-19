import Image from 'next/image'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import { ChangeEvent } from 'react'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import { useStore } from '../Atoms/Store'

interface Props {
  onImagesSelected: (image: File[]) => void
}

export default function ImageUploadMolecule({ onImagesSelected }: Props) {
  const { selectedImages, setSelectedImages } = useStore()

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files
    if (files) {
      const filesArray = Array.from(files)
      const totalSize = filesArray.reduce((acc, file) => acc + file.size, 0)

      const maxSize = 10 * 1024 * 1024 //10MB
      if (totalSize > maxSize) {
        alert('이미지는 최대 10MB까지 올릴 수 있습니다.')
        return
      }

      const combinedImages = [...selectedImages, ...filesArray]
      setSelectedImages(combinedImages)
      onImagesSelected(combinedImages) //부모 컴포넌트로 File[] 전달
    }
  }

  const removeImage = (index: number) => {
    if (selectedImages) {
      const newImages = [...selectedImages]
      newImages.splice(index, 1)
      setSelectedImages(newImages)
      onImagesSelected(newImages)
    }
  }

  return (
    <div>
      <div className="flex items-center w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
        {selectedImages &&
          Array.from(selectedImages).map((image, index) => (
            <BoxStore boxStyle={BoxStyle.BOX_IMAGE} key={index}>
              <Image
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                width={100}
                height={100}
                className="w-full h-full object-cover border rounded-2xl"
              />
              <button
                className="absolute top-1 right-1.5 text-xs border-none cursor-pointer "
                onClick={() => removeImage(index)}>
                ❌
              </button>
            </BoxStore>
          ))}
        <InputStore
          inputStyle={InputStyle.INPUT_IMAGE}
          onChageFunction={handleImageChange}
        />
      </div>
    </div>
  )
}
