import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import Header from '../Molecules/Header'
import { IconStyle } from '../Atoms/Icon/IconStore'
import { useStore } from '../Atoms/Store'

export default function UploadHeader() {
  const { content, hashTags, selectedImages } = useStore()

  const handleOnClick = () => {
    const formData = new FormData()
    let boardData = {
      hashTag: hashTags,
      // category: allSelectedSubCategories,
      content,
      // temperature: usetemp,
      // weatherIcon: `https://openweathermap.org/img/wn/${icon}.png`,
    }

    formData.append('board', JSON.stringify(boardData))
    selectedImages.forEach(image => {
      formData.append('images', image)
    })

    console.log('등록 버튼 클릭')
    console.log('content: ', content) //ok
    console.log('hashTag: ', hashTags) //ok
    const images = formData.getAll('images')
    console.log('images: ', images)
  }

  return (
    <>
      <Header
        isIcon={false}
        title="등록하기"
        iconStyleCase={IconStyle.PREV2}
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="등록"
        onClickFunction={handleOnClick}
      />
    </>
  )
}
