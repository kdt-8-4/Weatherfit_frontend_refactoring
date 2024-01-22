// "use client"

import ProfileInfo from '@/Components/Molecules/ProfileInfo'
import ProfilePost from '@/Components/Molecules/ProfilePost'
import ProfilePostBar from '@/Components/Molecules/ProfilePostBar'
import ProfileHeader from '@/Components/Organisms/ProfileHeader'

export default function Mypage() {
  return (
    <>
      <ProfileHeader />
      <br />
      <ProfileInfo />
      <br />
      <ProfilePostBar />
      <br />
      <ProfilePost />
    </>
  )
}
