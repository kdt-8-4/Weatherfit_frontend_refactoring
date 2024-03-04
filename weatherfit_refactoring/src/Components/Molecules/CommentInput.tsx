import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'

interface Props {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
  style?: string
  inputStyle?: string
}

export default function CommentInput({
  content,
  setContent,
  handleSubmit,
  style,
  inputStyle,
}: Props) {
  return (
    <form className={style} onSubmit={handleSubmit}>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="text"
        placeholderContents="닉네임(으)로 작성..."
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
        게시
      </ButtonStore>
    </form>
  )
}
