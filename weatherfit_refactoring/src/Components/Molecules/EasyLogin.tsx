import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'

export default function EasyLogin() {
  return (
    <div className="mt-[30px] flex flex-col items-center">
      <p className="font-NanumSquareRound text-[gray] mb-[5px]">간편 로그인</p>
      <ButtonStore
        buttonStyle={ButtonStyle.GOOGLE_BTN}
        style="font-NanumSquareRound w-[85vw]"
      />
    </div>
  )
}
