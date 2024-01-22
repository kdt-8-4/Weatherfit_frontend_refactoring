import UploadWeather from '../Molecules/UploadWeather'
import ImageUploadMolecule from '../Molecules/UploadImage'
import { useStore } from '../Atoms/Store'
import { useCallback } from 'react'

export default function ImageUpload() {
  const { setSelectedImages } = useStore()

  const handleImagesSelected = useCallback((files: File[] | null) => {
    setSelectedImages(files ? Array.from(files) : [])
  }, [])

  return (
    <div className="flex-col items-center justify-center mb-7">
      <UploadWeather />
      <ImageUploadMolecule onImagesSelected={handleImagesSelected} />
    </div>
  )
}
