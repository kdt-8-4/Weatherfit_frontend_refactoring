import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'

interface Props {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
  place: string
  btnText: string
  style?: string
  inputStyle?: string
}

export default function CommentInput({
  content,
  setContent,
  handleSubmit,
  place,
  btnText,
  style,
  inputStyle,
}: Props) {
  return (
    <form className={style} onSubmit={handleSubmit}>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="text"
        placeholderContents={place}
        style={inputStyle}
        onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
        value={content}
      />
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="w-[40px] h-[30px]"
        btnType="submit">
        {btnText}
      </ButtonStore>
    </form>
  )
}
