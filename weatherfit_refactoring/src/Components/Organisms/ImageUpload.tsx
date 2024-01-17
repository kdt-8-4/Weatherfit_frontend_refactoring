import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import UploadDate from '../Molecules/UploadDate'

export default function ImageUpload() {
  return (
    <div className="flex-col items-center justify-center">
      <UploadDate />
      <InputStore inputStyle={InputStyle.INPUT_IMAGE} />
    </div>
  )
}
