export default function Logout() {
  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      // 쿠키에 로그인 토큰 삭제
      // console.log("로그아웃 후 쿠키 확인: ", accessToken);
      console.log('로그아웃 후 쿠키 확인: ')
      alert('로그아웃 되었습니다.')
      window.location.href = '/'
    }
  }

  return (
    <>
      <button
        type="button"
        className="font-bold font-gmarketsans cursor-pointer"
        onClick={handleLogout}>
        로그아웃
      </button>
    </>
  )
}
