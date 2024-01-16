import InputStore, { InputStyle } from './Input/InputStore'

export default function TextUpload() {
  return (
    <>
      <InputStore
        inputStyle={InputStyle.INPUT_TEXTAREA}
        placeholderContents="코디와 같이 올리고 싶은 #해시태그를 작성해주세요"
      />
    </>
  )
}
