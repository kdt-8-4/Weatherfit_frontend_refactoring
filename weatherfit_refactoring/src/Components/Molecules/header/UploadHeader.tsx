import { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import Header from './Header'
import { useStore } from '../../../Store/Store'
import { WeatherContext } from '../../../../contexts/WeatherContext'
import { confirmAlert } from '@/utils/function/utilFunction'
import { AuthTokenStore } from '@/Store/AuthToken'
import { useContext } from 'react'

export default function UploadHeader() {
  const { content, hashTag, selectedImages, selectedSubCategories } = useStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장
  const { icon, tempNow } = useContext(WeatherContext)
  const { accesstoken } = AuthTokenStore()

  const handleOnClick = async () => {
    console.log('clicked')
    if (selectedImages.length === 0) {
      confirmAlert('업로드 된 사진이 없습니다.')
      return // 함수를 여기서 종료하여 더 이상 진행하지 않습니다.
    }

    if (category.length === 0) {
      confirmAlert('선택된 카테고리가 없습니다.')
      return // 함수를 여기서 종료합니다.
    }

    try {
      const formData = new FormData()
      const boardData = {
        hashTag,
        category,
        content,
        temperature: tempNow,
        weatherIcon: `https://openweathermap.org/img/wn/${icon}.png`,
      }

      formData.append('board', JSON.stringify(boardData))
      selectedImages.forEach(image => {
        formData.append('images', image)
      })

      const response = await fetch('https://www.jerneithe.site/board/write', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: 'Bearer ' + accesstoken,
        },
      })

      if (response.ok) {
        confirmAlert('업로드 되었습니다.')
        window.location.href = `/feed`
      } else {
        confirmAlert('업로드에 실패했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Header
      title="등록하기"
      buttonStyleCase={ButtonStyle.TEXT_BTN}
      btnText="완료"
      onClickFunction={handleOnClick}
    />
  )
}
