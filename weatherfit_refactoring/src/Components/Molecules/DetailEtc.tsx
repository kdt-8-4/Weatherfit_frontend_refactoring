'use client'

import { useState } from 'react'
import jwt from 'jsonwebtoken'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { usePathname, useRouter } from 'next/navigation'
import { deleteAlert, deleteOkAlert } from '@/utils/function/utilFunction'
import { AuthTokenStore } from '@/Store/AuthToken'

export default function DetailEtc({
  boardId,
  nickName,
}: {
  boardId: BOARDID
  nickName: string
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { accesstoken } = AuthTokenStore()
  const decodedToken = accesstoken
    ? (jwt.decode(accesstoken) as { [key: string]: any })
    : null
  const decoded_nickName = decodedToken?.sub
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
                Authorization: 'Bearer ' + accesstoken,
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
      {' '}
      {decoded_nickName === nickName ? (
        <IconStore
          iconStyle={IconStyle.ETC}
          style="cursor-pointer"
          size={25}
          onClickFunction={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      ) : null}
      {isDropdownOpen && (
        <div className="absolute top-[160px] right-[12px] bg-white flex flex-col space-y-1 font-NanumSquareRound text-sm">
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_BTN}
            onClickFunction={handleEdit}
            style="hover:bg-gray-100 px-2 py-1">
            수정
          </ButtonStore>
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_BTN}
            onClickFunction={handleDelete}
            style="hover:bg-gray-100 px-2 py-1">
            삭제
          </ButtonStore>
        </div>
      )}
    </>
  )
}
