'use client'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'

export default function EasyLogin() {
  const GoogleLogin = () => {
    window.location.href =
      'https://accounts.google.com/o/oauth2/v2/auth?client_id=453423602833-7db2b1dbicre47rkcrpfgn20nd16l9rs.apps.googleusercontent.com&redirect_uri=https://weatherfit-frontend.vercel.app/socialregister&response_type=token&scope=email'
  }

  return (
    <section>
      <div className="mt-[30px] flex flex-col items-center">
        <hr className="w-[100%] h-[1px] block relative bottom-[-12px] border-none bg-[gray] " />
        <p className="font-NanumSquareRound text-[gray] mb-[10px] px-[6px] bg-[#fff] z-10">
          간편 로그인
        </p>
        <ButtonStore
          buttonStyle={ButtonStyle.GOOGLE_BTN}
          style="font-NanumSquareRound w-[332px]"
          onClickFunction={GoogleLogin}
        />
      </div>
    </section>
  )
}
