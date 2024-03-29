import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'

export default function EasyLogin() {
  const GoogleLogin = () => {}

  return (
    <div className="mt-[30px] flex flex-col items-center">
      <hr className="w-[100%] h-[1px] block relative bottom-[-12px] border-none bg-[gray] " />
      <p className="font-NanumSquareRound text-[gray] mb-[5px] px-[6px] bg-[#fff] z-10">
        간편 로그인
      </p>
      <ButtonStore
        buttonStyle={ButtonStyle.GOOGLE_BTN}
        style="font-NanumSquareRound w-[85vw]"
      />
    </div>
  )
}
