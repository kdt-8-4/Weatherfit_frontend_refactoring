'use client'

import { useState } from 'react'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { usePathname, useRouter } from 'next/navigation'
import { deleteAlert, deleteOkAlert } from '@/utils/function/utilFunction'

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
            deleteOkAlert().then(() => {
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
