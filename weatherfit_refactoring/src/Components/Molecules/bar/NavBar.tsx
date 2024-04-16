import NavBarBox from './NavBarBox'

export default function NavBar() {
  return (
    <footer>
      <nav
        className="absolute bottom-[15px] mx-[2.5%] flex justify-around items-center bg-white w-[93%] h-[52px] border border-black rounded-[30px] z-10 py-[5px]"
        style={{ boxShadow: '7px 7px 1px' }}
        tabIndex={0}
        aria-label="네브바 입니다. 아래에서 원하는 페이지로 이동할 수 있습니다.">
        <NavBarBox
          iconStyle="HOME"
          title="홈"
          url="/"
          ariaLabel="홈으로 이동"
        />
        <NavBarBox
          iconStyle="SEARCH"
          title="구경"
          url="/feed"
          ariaLabel="피드 페이지로 이동"
        />
        <NavBarBox
          iconStyle="UPLOAD"
          title="업로드"
          url="/upload"
          ariaLabel="업로드 페이지로 이동, 로그인 후 이용 가능"
        />
        <NavBarBox
          iconStyle="MY_PROFILE"
          title="마이페이지"
          url="/mypage"
          ariaLabel="마이 페이지로 이동, 로그인 후 이용 가능"
        />
      </nav>
    </footer>
  )
}
