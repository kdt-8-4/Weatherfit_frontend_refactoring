'use client'

import React, { useState } from 'react'
import ProfileEditModal from '../../Organisms/mypage/ProfileEditModal'
import Header from './Header'
import { IconStyle } from '../../Atoms/Icon/IconStore'

interface Props {
  userInfo: UserData
}

export default function ProfileHeader({ userInfo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Header
        title="프로필"
        iconStyleCase={IconStyle.SETTING}
        onClickFunction={handleModalOpen}
      />
      {isModalOpen && (
        <ProfileEditModal
          onClickFunction={handleModalClose}
          userInfo={userInfo}
        />
      )}
    </>
  )
}
