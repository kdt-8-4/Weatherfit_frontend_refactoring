import TextUpload from '@/Components/Atoms/TextUpload'
import ImageUpload from '@/Components/Organisms/ImageUpload'

export default function Upload() {
  return (
    <>
      <div className="mx-5">
        <ImageUpload />
        <TextUpload />
      </div>
    </>
  )
}
