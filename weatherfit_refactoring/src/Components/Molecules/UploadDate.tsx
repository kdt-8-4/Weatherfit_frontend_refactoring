import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

// UploadWeather
export default function UploadDate() {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <div className="flex mb-3 items-center w-fit">
      <p className="font-gmarketsans pt-[5px] mr-3">업로드 날씨</p>
      {/* Weather API에서 날씨 아이콘 가져와서 보여주기 */}
      {/* <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="font-NanumSquareRound rounded-full text-[12px] px-5 pt-[1px] cursor-default w-fit">
        {month}월 {day}일
      </ButtonStore> */}
    </div>
  )
}
