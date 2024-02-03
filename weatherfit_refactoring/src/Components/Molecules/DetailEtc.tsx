'use client'

import { useState } from 'react'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { deleteAlert } from '@/utils/function/utilFunction'
import { useRouter, usePathname } from 'next/navigation'
import Swal from 'sweetalert2'

export default function DetailEtc(boardId: BOARDID) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const currentUrl = usePathname()

  const handleEdit = () => {
    router.push(`${currentUrl}/edit`)
  }

  const handleDelete = () => {
    deleteAlert().then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://www.jerneithe.site/board/delete/${boardId}`,
            {
              method: 'DELETE',
              headers: {
                // Authorization: 'Bearer ' + logintoken,
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDY3OTA5MDEsImV4cCI6MTcwNjgwMTcwMSwic3ViIjoi7YWM7Iqk7YSwNTUifQ.sdm2nHun06cOIeWzXFv8xSbuuhY_yCsiRT7Upu1vtIs',
              },
            },
          )
          const data = await response.json()
          console.log(data.result)
          if (response.ok) {
            Swal.fire({
              title: '삭제 완료',
              text: '게시물이 성공적으로 삭제되었습니다.',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: '확인',
              customClass: {
                // popup: 'w-[275px] font-NanumSquareRound',
                // icon: 'size-13',
                // title: 'text-xl',
                // 커스텀 하기
              },
            }).then(() => {
              router.push('/feed')
            })
          }
        } catch (error) {
          console.error('Error: ', error)
        }
      }
    })
  }

  return (
    <>
      <IconStore
        iconStyle={IconStyle.ETC}
        style="cursor-pointer"
        size={25}
        onClickFunction={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <div className="absolute top-[160px] right-[12px] bg-white flex flex-col space-y-1 font-NanumSquareRound text-sm">
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_BTN}
            onClickFunction={handleEdit}
            style="hover:bg-gray-100 px-2 py-1"
            btnText="수정"
          />
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_BTN}
            onClickFunction={handleDelete}
            style="hover:bg-gray-100 px-2 py-1"
            btnText="삭제"
          />
        </div>
      )}
    </>
  )
}
