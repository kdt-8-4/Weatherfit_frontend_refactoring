'use client'

import { ButtonStyle } from '../Atoms/Button/ButtonStore'
import Header from '../Molecules/Header'
import { useStore } from '../../Store/Store'

export default function EditHeader(boardId: BOARDID) {
  const {
    content,
    hashTag,
    selectedImages,
    selectedSubCategories,
    deletedImages,
  } = useStore()
  const category = Object.values(selectedSubCategories).flat() // 하위 카테고리들만 저장

  const handleOnClick = async () => {
    try {
      console.log('content: ', content)
      console.log('hashTag: ', hashTag)
      console.log('images: ', selectedImages)
      console.log('category: ', category)
      console.log('deletedImages_id', deletedImages)
      // const formData = new FormData()
      // const boardData = {
      //   hashTag,
      //   category,
      //   content,
      //   deletedImages,
      // }

      // formData.append('board', JSON.stringify(boardData))
      // selectedImages.forEach(image => {
      //   formData.append('images', image)
      // })

      // const response = await fetch(
      //   `https://www.jerneithe.site/board/edit/${boardId}`,
      //   {
      //     method: 'PATCH',
      //     body: formData,
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //       // Authorization: 'Bearer ' + logintoken,
      //       Authorization:
      //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDU2NjMwNDMsImV4cCI6MTcwNTY3Mzg0Mywic3ViIjoi7YWM7Iqk7YSwNTUifQ.3I1pZDJYZO2a7lOypu6DegBZ5DuzKYQttbP49U9g1Oo',
      //     },
      //   },
      // )

      // console.log(response)
      // console.log('수정 버튼 클릭')
      // console.log('content: ', content)
      // console.log('hashTag: ', hashTag)
      // const images = formData.getAll('images')
      // console.log('images: ', images)
      // console.log('category', category)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header
        title="수정하기"
        buttonStyleCase={ButtonStyle.TEXT_BTN}
        btnText="완료"
        onClickFunction={handleOnClick}
      />
    </>
  )
}
