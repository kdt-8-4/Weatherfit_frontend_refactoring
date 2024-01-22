'use client'

import React, { useState, MouseEventHandler } from 'react'
import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { IconStyle } from '../Atoms/Icon/IconStore'
import Header from '../Molecules/Header'
import ProfileEditModal from './ProfileEditModal'

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
        isIcon={true}
        title="프로필"
        iconStyleCase={IconStyle.PREV2}
        iconStyleCase2={IconStyle.SETTING}
        onClickFunction2={handleModalOpen}
      />
      {isModalOpen && <ProfileEditModal onClickFunction={handleModalClose} />}
    </>
  )
}
