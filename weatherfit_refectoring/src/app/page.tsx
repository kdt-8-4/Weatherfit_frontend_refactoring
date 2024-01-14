import IconStore, { IconStyle } from "../Components/Atoms/Icon/IconStore";
import InputStore, { InputStyle } from "@/Components/Atoms/Input/InputStore";
import ButtonStore, { ButtonStyle } from "@/Components/Atoms/Button/ButtonStore";

export default function Home() {
  return (
    <>
      <p>리팩토링 시작</p>

      <IconStore iconStyle={IconStyle.UNLIKE} size={16} >
            마이프로필 채워짐
      </IconStore>

      <InputStore inputStyle={InputStyle.INPUT_WHITE} placeholderContents="아이디 입력" widthInput={500}>
        인풋
      </InputStore>
      
      <InputStore inputStyle={InputStyle.INPUT_IMAGE}>
      이미지 업로드  
      </InputStore> 

      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN} btnName="내 버튼" btnwidth={150}>
        버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN_FILL} btnName="내 버튼" btnwidth={150}>
        버튼
      </ButtonStore>
      
      <ButtonStore buttonStyle={ButtonStyle.CONFIRM_BTN} btnName="로그인" btnwidth={180} btnheight={35}>
        버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN_FILL} btnName="맨투맨" btnwidth={75}>
        버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.GOOGLE_BTN} btnwidth={300} font="gmarketsans">
        버튼
      </ButtonStore>

      <ButtonStore buttonStyle={ButtonStyle.SIGNUP_BTN} font="neurimboGothic" fontsize="32">
        버튼
      </ButtonStore>
    </>
  )
}
