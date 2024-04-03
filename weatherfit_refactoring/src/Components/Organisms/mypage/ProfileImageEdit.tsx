import React, { useEffect, useState } from 'react'
import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import Image from 'next/image'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import { AuthUserStore } from '@/Store/AuthUser'
import { AuthTokenStore } from '@/Store/AuthToken'

interface Props {
  image: string | null
}

export default function ProfileImageEdit({ image }: Props) {
  const [selectedImage, setSelectedImage] = useState(image)
  // const [selectedImage, setSelectedImage] = useState<string | null>(
  //   'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90',
  // )
  const { userEmail } = AuthUserStore()
  const { accesstoken } = AuthTokenStore()

  // 파일 비동기 전송
  const handleImageSubmit = async () => {
    try {
      if (confirm('이미지를 수정하시겠습니까?')) {
        const formData = new FormData()
        if (selectedImage) {
          formData.append('image', selectedImage) // 이미지 파일을 FormData에 추가
        }

        if (userEmail !== null) {
          formData.append('email', userEmail)
        }

        // formData.append('email', userEmail)

        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`)
        }

        const res = await fetch(
          `https://www.jerneithe.site/user/api/profile/modify/image`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + accesstoken,
            },
            body: formData,
          },
        )

        const imageRes = await res.json()

        console.log('이미지 수정 결과:', imageRes)

        // 모달 닫히는 함수 실행하기
      }
    } catch (error) {
      console.error('이미지 업로드 에러: ', error)
    }
  }

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0]
    setSelectedImage(file)
  }

  const handleDefaultImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setSelectedImage(null) // 기본 이미지로 설정하면 userProfileImage가 null로 변경
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        {selectedImage ? (
          typeof selectedImage === 'string' ? (
            <Image
              src={selectedImage}
              alt="Current"
              width={100}
              height={100}
              className="rounded-[50%]"
            />
          ) : (
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              width={100}
              height={100}
              className="rounded-[50%]"
            />
          )
        ) : (
          <IconStore
            iconStyle={IconStyle.MY_PROFILE_FILL}
            size={100}
            style="border-[3px] border-solid border-gray rounded-full"
          />
        )}
      </div>
      {/* 파일 업로드 인풋 */}
      <div className="font-gmarketsans my-[10px] text-[12px]">
        <input
          type="file"
          id="imageUploadInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <label htmlFor="imageUploadInput" className="mx-[5px] cursor-pointer">
          이미지 선택
        </label>
        |
        <button onClick={handleDefaultImage} type="button" className="mx-[5px]">
          기본 이미지
        </button>
      </div>
      <ButtonStore
        buttonStyle={ButtonStyle.CATEGORY_BTN_Y}
        btnType="submit"
        onClickFunction={handleImageSubmit}
        style="font-neurimboGothic px-[10px] pb-[5px]">
        이미지 수정
      </ButtonStore>
    </div>
  )
}
