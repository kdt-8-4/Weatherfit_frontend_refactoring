import IconStore, { IconStyle } from "../Components/Atoms/Icon/IconStore";
import InputStore, { InputStyle } from "@/Components/Atoms/Input/InputStore";
import ButtonStore, { ButtonStyle } from "@/Components/Atoms/Button/ButtonStore";

export default function Home() {
  return (
    <>
      <p>리팩토링 시작</p>
      <p>
        각 아톰에 적혀있는 적어야하는 Props를 제외하고, 테일윈드로 마진이나 위치를 변경하고 싶다면 
        <br/>
        테일윈드 문법으로 해서 style에 string 형식으로 적어주면 됩니당
        <br/>
        원하는 폰트 사용할려면 font ="font-원하는폰트이름"으로 적어서 사용하면 되고 목록은
        <br/>
        gmarketsans
        <br/>
        NanumSquareRound
        <br/>
        Cafe24SsurroundAir
        <br/>
        neurimboGothic
        <br/>
        ex - style = "font-neurimboGothic m-auto static " === font-family:neurimboGothic; margin:auto; position:static;
        <br/>
        그리고 tailwind 적는 순서는 원래 권장순서가 있지만 우리는 알파벳 순서로 통일할게요 위에도 알파벳 순서 맞춰서 적은거에요
      </p>

      <IconStore iconStyle={IconStyle.UNLIKE} size={16} />

      <InputStore inputStyle={InputStyle.INPUT_WHITE} placeholderContents="아이디 입력" style="w-[130px]" />
      
      <InputStore inputStyle={InputStyle.INPUT_IMAGE} /> 

      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN} style="w-[150px]">
        버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN_FILL} style="w-[150px]">
        버튼
      </ButtonStore>
      
      <ButtonStore buttonStyle={ButtonStyle.CONFIRM_BTN} style="w-[180px] h-[35px]">
        내 버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN_FILL} style="w-[75px]">
        맨투맨
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.GOOGLE_BTN} style="font-gmarketsans w-[300px]"/>

      <ButtonStore buttonStyle={ButtonStyle.SIGNUP_BTN} style="font-neurimboGothic" fontsize="32"/>
    </>
  )
}
