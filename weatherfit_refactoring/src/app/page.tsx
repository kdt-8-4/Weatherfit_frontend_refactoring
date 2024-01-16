import IconStore, { IconStyle } from '../Components/Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import ImageUpload from '@/Components/Molecules/ImageUpload'

export default function Home() {
  return (
    <>
      <IconStore iconStyle={IconStyle.UNLIKE} size={16} />
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        placeholderContents="아이디 입력"
        style="w-[130px]"
      />
      <InputStore inputStyle={InputStyle.INPUT_IMAGE} />
      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN} style="w-[150px]">
        버튼
      </ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN_FILL} style="w-[150px]">
        버튼
      </ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="w-[180px] h-[35px]">
        내 버튼
      </ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN_FILL} style="w-[75px]">
        맨투맨
      </ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.GOOGLE_BTN}
        style="font-gmarketsans w-[300px]"
      />
      <ButtonStore
        buttonStyle={ButtonStyle.SIGNUP_BTN}
        style="font-neurimboGothic"
        fontsize="32"
      />

      {/* ------ MoleCules */}
      <ImageUpload />
    </>
  )
}
