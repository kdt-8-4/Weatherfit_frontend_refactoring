import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import Header from '../Molecules/Header'
import { useStore } from '../../Store/Store'
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTemp } from '@/Store/WeatherTemp'

export default function UploadHeader() {
  const { content, hashTag, selectedImages, selectedSubCategories } = useStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장
  const { weatherIcon } = WeatherIcon()
  const { temperature } = WeatherTemp()

  const handleOnClick = async () => {
    try {
      const formData = new FormData()
      const boardData = {
        hashTag,
        category,
        content,
        temperature,
        weatherIcon: `https://openweathermap.org/img/wn/${weatherIcon}.png`,
      }

      formData.append('board', JSON.stringify(boardData))
      selectedImages.forEach(image => {
        formData.append('images', image)
      })

      const response = await fetch('https://www.jerneithe.site/board/write', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: 'Bearer ' + logintoken,
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDY3OTA5MDEsImV4cCI6MTcwNjgwMTcwMSwic3ViIjoi7YWM7Iqk7YSwNTUifQ.sdm2nHun06cOIeWzXFv8xSbuuhY_yCsiRT7Upu1vtIs',
        },
      })

      console.log(response)
      console.log('등록 버튼 클릭')
      console.log('content: ', content) //ok
      console.log('hashTag: ', hashTag) //ok
      const images = formData.getAll('images')
      console.log('images: ', images)
      console.log('selected categories', category)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header
        title="등록하기"
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="등록"
        onClickFunction={handleOnClick}
      />
    </>
  )
}
