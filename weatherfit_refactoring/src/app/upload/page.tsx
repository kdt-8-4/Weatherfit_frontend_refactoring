'use client'

import ImageUpload from '@/Components/Organisms/ImageUpload'
import TextAreaMolecule from '@/Components/Molecules/TextAreaMolecule'
import SelectCategory from '@/Components/Organisms/SelectCategory'
import UploadHeader from '@/Components/Organisms/UploadHeader'
import UploadWeather from '@/Components/Molecules/UploadWeather'

export default function Upload() {
  return (
    <div className="h-screen">
      {/* 헤더 들어가야 함*/}
      <UploadHeader />
      {/* 디자인에 있는 날씨 바 없어도 될 듯..?*/}
      <div className="mx-5 h-full">
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
