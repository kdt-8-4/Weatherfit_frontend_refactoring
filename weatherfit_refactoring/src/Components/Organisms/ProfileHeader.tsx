'use client'

import React, { useState, MouseEventHandler } from 'react'
import { ButtonStyle } from '../Atoms/Button/ButtonStore'

export default function ProfileHeader() {
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
        onClickFunction2={handleModalOpen}
      />
      {isModalOpen && <ProfileEditModal onClickFunction={handleModalClose} />}
    </>
  )
}
