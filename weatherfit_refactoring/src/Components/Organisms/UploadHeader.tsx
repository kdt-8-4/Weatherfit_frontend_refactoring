import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import Header from '../Molecules/Header'
import { useStore } from '../../Store/Store'
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTemp } from '@/Store/WeatherTemp'
import { AuthTokenStore } from '@/Store/AuthToken'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'

export default function UploadHeader() {
  const { content, hashTag, selectedImages, selectedSubCategories } = useStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장
  const { weatherIcon } = WeatherIcon()
  const { temperature } = WeatherTemp()
  const { accesstoken } = AuthTokenStore()

  const uploadUrl = 'https://www.jerneithe.site/board/write'
  const { mutate, isLoading, error } = useFetchMutation(uploadUrl)

  const handleOnClick = async () => {
    if (selectedImages.length === 0) {
      alert('업로드 된 사진이 없습니다.')
      return null
    }

    if (category.length === 0) {
      alert('선택된 카테고리가 없습니다.')
      return null
    }

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

    mutate(
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: 'Bearer ' + accesstoken,
          // 'Content-Type': 'multipart/form-data' 헤더 생략. 브라우저가 자동으로 처리
        },
      },
      {
        onSuccess: () => {
          alert('업로드 되었습니다.')
          window.location.href = `/feed`
        },
        onError: error => {
          console.error(error)
          alert('업로드에 실패했습니다. 다시 시도해주세요.')
        },
      },
    )
  }

  return (
    <div className="fixed w-full top-0 z-10">
      <Header
        title="등록하기"
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="완료"
        onClickFunction={handleOnClick}
      />
    </div>
  )
}
