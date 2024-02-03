'use client'

import { usePathname, useRouter } from 'next/navigation'
import DetailEtc from '../Molecules/DetailEtc'
import DetailProfile from '../Molecules/DetailProfile'
import Swal from 'sweetalert2'
import { deleteAlert } from '@/utils/function/utilFunction'

export default function DetailProfileOrganism({ boardId }: BOARDID) {
  const router = useRouter()
  const currentUrl = usePathname()

  const handleEdit = () => {
    router.push(`${currentUrl}/edit`)
  }

  const handleDelete = () => {
    deleteAlert().then(async result => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://www.jerneithe.site/board/delete/${boardId}`,
            {
              method: 'DELETE',
              headers: {
                // Authorization: 'Bearer ' + logintoken,
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDY3OTA5MDEsImV4cCI6MTcwNjgwMTcwMSwic3ViIjoi7YWM7Iqk7YSwNTUifQ.sdm2nHun06cOIeWzXFv8xSbuuhY_yCsiRT7Upu1vtIs',
              },
            },
          )
          const data = await response.json()
          console.log(data.result)
          if (response.ok) {
            Swal.fire({
              title: '삭제 완료',
              text: '게시물이 성공적으로 삭제되었습니다.',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: '확인',
              customClass: {
                // popup: 'w-[275px] font-NanumSquareRound',
                // icon: 'size-13',
                // title: 'text-xl',
                // 커스텀 하기
              },
            }).then(() => {
              router.push('/feed')
            })
          }
        } catch (error) {
          console.error('Error: ', error)
        }
      }
    })
  }

  return (
    <div className="flex justify-between items-center mx-5 ">
      <DetailProfile boardId={boardId} />
      {/* 게시글 작성자와 로그인 유저 같을 때만 보여주기 */}
      <DetailEtc handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
}
