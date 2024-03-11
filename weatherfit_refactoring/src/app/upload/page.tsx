'use client'

import ImageUpload from '@/Components/Organisms/ImageUpload'
import TextAreaMolecule from '@/Components/Molecules/TextAreaMolecule'
import SelectCategory from '@/Components/Organisms/SelectCategory'
import UploadHeader from '@/Components/Organisms/UploadHeader'
import UploadWeather from '@/Components/Molecules/UploadWeather'

export default function Upload() {
  return (
    <div className="h-screen">
      <UploadHeader />
      <div className="mx-5 h-full mt-[50px]">
        <div className="flex-col items-center justify-center mb-7">
          <UploadWeather />
          <ImageUpload />
        </div>
        <TextAreaMolecule />
        <hr />
        <SelectCategory />
      </div>
    </div>
  )
}
