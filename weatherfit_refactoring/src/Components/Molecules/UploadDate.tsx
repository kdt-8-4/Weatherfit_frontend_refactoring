import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

export default function UploadDate() {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <div className="flex mb-3 items-center w-fit">
      <p className="font-gmarketsans pt-[5px] mr-3">업로드 날짜</p>
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="font-NanumSquareRound rounded-full text-[12px] px-5 pt-[1px] cursor-default w-fit">
        {month}월 {day}일
      </ButtonStore>
    </div>
  )
}
