import IconStore, { IconStyle } from '../Components/Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import ImageUpload from '@/Components/Organisms/ImageUpload'
import MainOrganism from '@/Components/Organisms/MainOrganism'
import NavBar from '@/Components/Molecules/NavBar'
import LikeAndComment from '@/Components/Molecules/LikeAndComment'

export default function Home() {
  return (
    <>
      <IconStore iconStyle={IconStyle.UNLIKE} size={16} />
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="text"
        placeholderContents="아이디 입력"
        style="w-[130px]"
      />
      <InputStore inputStyle={InputStyle.INPUT_IMAGE} />
      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN} style="w-[150px]">
        DEFAULT_BTN
      </ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN_FILL} style="w-[150px]">
        DEFAULT_BTN_FILL
      </ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="w-[180px] h-[35px]">
        CONFIRM_BTN
      </ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN} style="w-[180px]">
        CATEGORY_BTN
      </ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.CATEGORY_BTN_CHECKED}
        style="w-[180px]">
        CATEGORY_BTN_CHECKED
      </ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN_Y} style="w-[180px]">
        CATEGORY_BTN_Y
      </ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.GOOGLE_BTN}
        style="font-gmarketsans w-[300px]"
      />
      <ButtonStore
        buttonStyle={ButtonStyle.TEXT_BTN}
        style="font-neurimboGothic text-[32px]"
        btnText="회원가입"
      />
      <MainOrganism />
      <LikeAndComment />
      <NavBar />
    </>
  )
}
