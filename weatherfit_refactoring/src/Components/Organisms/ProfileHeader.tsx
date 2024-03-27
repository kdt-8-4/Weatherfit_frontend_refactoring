'use client'

import React, { useState } from 'react'
import ProfileEditModal from './ProfileEditModal'
import Header from '../Molecules/Header'
import { IconStyle } from '../Atoms/Icon/IconStore'

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
