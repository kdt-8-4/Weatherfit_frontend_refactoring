import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'

interface Props {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
  style?: string
}

export default function CommentInput({
  content,
  setContent,
  handleSubmit,
  style,
}: Props) {
  return (
    <form className={style} onSubmit={handleSubmit}>
      <label>
        내용:
        <InputStore
          inputStyle={InputStyle.INPUT_WHITE}
          inputType="text"
          placeholderContents="닉네임(으)로 댓글 달기..."
          style="w-[255px] h-[30px] ml-[5px]"
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
      </label>
    </form>
  )
}
