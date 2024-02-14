import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'

export default function NavBar() {
  return (
    <div
      className="flex w-[370px] justify-around items-center bg-white border border-black rounded-[30px] z-10 py-[5px]"
      style={{ boxShadow: '7px 7px 1px' }}>
      <div className="flex flex-col items-center">
        <IconStore iconStyle={IconStyle.HOME} size={22} />
        <p className="font-Cafe24SsurroundAir text-[12px]">홈</p>
      </div>
      <div className="flex flex-col items-center">
        <IconStore iconStyle={IconStyle.SEARCH} size={22} />
        <p className="font-Cafe24SsurroundAir text-[12px]">구경</p>
      </div>
      <div className="flex flex-col items-center">
        <IconStore iconStyle={IconStyle.UPLOAD} size={22} />
        <p className="font-Cafe24SsurroundAir text-[12px]">업로드</p>
      </div>
      <div className="flex flex-col items-center">
        <IconStore iconStyle={IconStyle.MY_PROFILE} size={22} />
        <p className="font-Cafe24SsurroundAir text-[12px]">마이페이지</p>
      </div>
    </div>
  )
}
