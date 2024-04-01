import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserStore } from '@/Store/AuthUser'
import { confirmAlert } from '@/utils/function/utilFunction'
import Cookies from 'js-cookie'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'

export default function Unregister() {
  const { accesstoken } = AuthTokenStore()
  const { userEmail } = AuthUserStore()

  const handleUnregister = async () => {
    try {
      if (confirm('정말로 탈퇴하시겠습니까?')) {
        const res = await fetch(
          `https://www.jerneithe.site/user/api/profile/remove/${userEmail}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer' + accesstoken,
            },
          },
        )

        const unregisterRes = await res.json()

        console.log('회원 탈퇴 response: ', unregisterRes)
        Cookies.remove('accessToken')
        localStorage.removeItem('user_email')
        confirmAlert('그동안 옷늘날씨를 이용해 주셔서 감사합니다.')
        window.location.href = '/'
      }
    } catch (error) {
      console.log('회원 탈퇴 err: ', error)
    }
  }

  return (
    <>
      <ButtonStore
        buttonStyle={ButtonStyle.TEXT_BTN}
        btnType="button"
        onClickFunction={handleUnregister}
        style="underline text-[#808080] text-[10px] font-gmarketsans">
        회원탈퇴
      </ButtonStore>
    </>
  )
}
