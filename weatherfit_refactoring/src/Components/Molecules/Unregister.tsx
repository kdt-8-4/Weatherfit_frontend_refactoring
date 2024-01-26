import axios from 'axios'

// Props로 UserInfo에서 email 있어야 함

export default function Unregister() {
  const handleUnregister = async () => {
    try {
      if (confirm('정말로 탈퇴하시겠습니까?')) {
        const response = await axios({
          method: 'DELETE',
          // url: `https://www.jerneithe.site/user/api/profile/remove/${email}`,
          headers: {
            Authorization: 'Bearer ',
          },
        })
        console.log('회원 탈퇴 response: ', response)
        // 쿠키에 로그인 토큰 삭제
        alert('그동안 옷늘날씨를 이용해 주셔서 감사합니다.')
        window.location.href = '/'
      }
    } catch (error) {
      console.log('회원 탈퇴 err: ', error)
    }
  }

  return (
    <>
      <button
        type="button"
        className="underline text-[#808080] text-[10px] font-gmarketsans cursor-pointer"
        onClick={handleUnregister}>
        회원탈퇴
      </button>
    </>
  )
}
