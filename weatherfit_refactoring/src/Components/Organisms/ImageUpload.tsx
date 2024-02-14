'use client'

import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useStore } from '../../Store/Store'
import ArrayImage from '../Molecules/ArrayImage'

export default function ImageUpload({ data }: { data?: FEEDDATA_detail }) {
  const { selectedImages, setSelectedImages, setDeletedImages } = useStore()
  const [existingImages, setExistingImages] = useState<IMAGE[]>([])
  const initialImages = data?.images

  useEffect(() => {
    if (data && initialImages) {
      setExistingImages(initialImages)
    }
  }, [initialImages])

  const handleImagesSelected = useCallback((files: File[] | null) => {
    setSelectedImages(files ? Array.from(files) : [])
  }, [])

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
      handleImagesSelected(combinedImages) //부모 컴포넌트로 File[] 전달
    }
  }

  const removeImage = (index: number, id?: number) => {
    if (selectedImages) {
      const newImages = [...selectedImages]
      newImages.splice(index, 1)
      setSelectedImages(newImages)
      handleImagesSelected(newImages)
    }
  }

  const removeExistingImage = (index: number, id: number) => {
    if (existingImages) {
      setDeletedImages(id)
      const newImages = [...existingImages]
      newImages.splice(index, 1)
      setExistingImages(newImages)
    }
  }

  return (
    <div>
      <div className="flex items-center w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
        {existingImages &&
          Array.from(existingImages).map((image, index) => (
            <ArrayImage
              key={index}
              index={index}
              imageUrl={image.imageUrl}
              removeImage={() => removeExistingImage(index, image.imageId)}
            />
          ))}
        {selectedImages &&
          Array.from(selectedImages).map((image, index) => (
            <ArrayImage
              key={index}
              index={index}
              imageUrl={URL.createObjectURL(image)}
              removeImage={() => removeImage(index)}
            />
          ))}
        <InputStore
          inputStyle={InputStyle.INPUT_IMAGE}
          onChageFunction={handleImageChange}
        />
      </div>
    </div>
  )
}
