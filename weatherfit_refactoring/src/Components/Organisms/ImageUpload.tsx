import UploadWeather from '../Molecules/UploadWeather'
import ImageUploadMolecule from '../Molecules/UploadImage'

export default function ImageUpload() {
  return (
    <div className="flex-col items-center justify-center mb-7">
      <UploadWeather />
      <ImageUploadMolecule />
    </div>
  )
}
