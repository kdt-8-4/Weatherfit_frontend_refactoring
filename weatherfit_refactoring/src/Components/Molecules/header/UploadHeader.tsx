import { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import Header from './Header'
import { useStore } from '../../../Store/Store'
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTemp } from '@/Store/WeatherTemp'
import { AuthTokenStore } from '@/Store/AuthToken'

export default function UploadHeader() {
  const { content, hashTag, selectedImages, selectedSubCategories } = useStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장
  const { weatherIcon } = WeatherIcon()
  const { temperature } = WeatherTemp()
  const { accesstoken } = AuthTokenStore()

  const handleOnClick = async () => {
    if (selectedImages.length === 0) {
      alert('업로드 된 사진이 없습니다.')
      return // 함수를 여기서 종료하여 더 이상 진행하지 않습니다.
    }

    if (category.length === 0) {
      alert('선택된 카테고리가 없습니다.')
      return // 함수를 여기서 종료합니다.
    }

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
          Authorization: 'Bearer ' + accesstoken,
        },
      })

      if (response.ok) {
        alert('업로드 되었습니다.')
        window.location.href = `/feed`
      } else {
        alert('업로드에 실패했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="absolute w-full top-0 z-10">
      <Header
        title="등록하기"
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="완료"
        onClickFunction={handleOnClick}
      />
    </div>
  )
}
