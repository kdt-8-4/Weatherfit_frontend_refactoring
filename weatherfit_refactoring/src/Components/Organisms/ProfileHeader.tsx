'use client'

import { IconStyle } from '../Atoms/Icon/IconStore'
import Header from '../Molecules/Header'

export default function ProfileHeader() {
  return (
    <>
      <Header title="프로필" iconStyleCase={IconStyle.SETTING} />
    </>
  )
}
