import { logout } from '@/utils/function/utilFunction'

export default function Logout() {
  return (
    <>
      <button
        type="button"
        className="font-bold font-gmarketsans"
        onClick={logout}>
        로그아웃
      </button>
    </>
  )
}
