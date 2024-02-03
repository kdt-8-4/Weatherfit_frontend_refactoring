import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'

export default function LoginForm() {
  const handleLogin = async () => {
    try {
      const respone = await fetch(`https://www.jerneithe.site/user/login/api`, {
        method: 'POST',
      })
      console.log('로그인 클릭')
      console.log('로그인 respone: ', respone)

      // 백엔드 연결 후 할 것
      // 토큰을 쿠키에 저장
      // 이메일을 로컬스토리지에 저장
    } catch (error) {
      console.log('로그인 에러')
    }
  }

  return (
    <form
      className="flex flex-col justify-evenly w-[85vw] h-[30vh]"
      onSubmit={handleLogin}>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="text"
        placeholderContents="이메일"
        style="font-NanumSquareRound h-[38px] border-[#abacad]"
      />
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="password"
        placeholderContents="비밀번호"
        style="font-NanumSquareRound h-[38px] border-[#abacad]"
      />
      {/* 로그인 버튼에 submit 타입 지정해야함 */}
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="font-neurimboGothic text-[22px] pb-[6px]">
        로그인
      </ButtonStore>
    </form>
  )
}
