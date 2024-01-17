'use client'

import ImageUpload from '@/Components/Organisms/ImageUpload'
import TextUpload from '@/Components/Atoms/TextUpload'
import SelectCategory from '@/Components/Atoms/SelectCategory'

export default function Upload() {
  return (
    <>
      <div className="mx-5">
        <ImageUpload />
        <TextUpload />
      </div>
      <SelectCategory />
    </>
  )
}
