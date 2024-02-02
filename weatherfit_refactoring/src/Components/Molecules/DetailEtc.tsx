'use client'

import { useState } from 'react'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

interface DetailEtcProps {
  handleEdit: () => void
  handleDelete: () => void
}

export default function DetailEtc({
  handleEdit,
  handleDelete,
}: DetailEtcProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
