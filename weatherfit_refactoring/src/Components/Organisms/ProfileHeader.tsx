'use client'

import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { IconStyle } from '../Atoms/Icon/IconStore'
import Header from '../Molecules/Header'

export default function ProfileHeader() {
  return (
    <>
      <Header
        isIcon={true}
        title="프로필"
        iconStyleCase={IconStyle.PREV2}
        iconStyleCase2={IconStyle.SETTING}
      />
    </>
  )
}
