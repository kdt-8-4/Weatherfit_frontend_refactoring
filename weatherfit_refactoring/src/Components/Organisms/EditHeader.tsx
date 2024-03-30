'use client'

import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import Header from '../Molecules/Header'
import { useStore } from '../../Store/Store'
import { AuthTokenStore } from '@/Store/AuthToken'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'

export default function EditHeader(boardId: BOARDID) {
  const {
    content,
    hashTag,
    selectedImages,
    selectedSubCategories,
    deletedImages,
  } = useStore()
  const { accesstoken } = AuthTokenStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장

  const editUrl = `https://www.jerneithe.site/board/edit/${boardId}`
  const { mutate: editBoard } = useFetchMutation(editUrl)

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
      deletedImages,
    }

    formData.append('board', JSON.stringify(boardData))
    selectedImages.forEach(image => {
      formData.append('images', image)
    })

    editBoard(
      {
        method: 'PATCH',
        body: formData,
        headers: {
          Authorization: 'Bearer ' + accesstoken,
        },
      },
      {
        onSuccess: () => {
          alert('수정이 완료되었습니다.')
          window.location.href = `feed/detail/${boardId}`
        },
        onError: error => {
          console.error(error)
          alert('수정에 실패했습니다. 다시 시도해주세요.')
        },
      },
    )
  }

  return (
    <div className="fixed w-full top-0 z-10">
      <Header
        title="수정하기"
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="완료"
        onClickFunction={handleOnClick}
      />
    </div>
  )
}
