import Swal from 'sweetalert2'

export const extractHashtags = (content: string): string[] => {
  const regex = /#(\S+)/g // # 다음에 공백이 아닌 모든 문자를 해시태그로 간주하는 정규식
  const matches = content.match(regex)
  if (matches) {
    // 매칭된 해시태그들 반환
    return matches.map(match => match.substring(1)) // #을 제외한 문자열 반환
  }
  return []
}

export const handlePrevious = (
  setIndex: (value: number | ((prevIndex: number) => number)) => void,
  imagesLength: number,
): void => {
  setIndex((prevIndex: number) => {
    if (prevIndex === 0) return imagesLength - 1
    else return prevIndex - 1
  })
}

export const handleNext = (
  setIndex: (value: number | ((prevIndex: number) => number)) => void,
  imagesLength: number,
): void => {
  setIndex((prevIndex: number) => {
    if (prevIndex === imagesLength - 1) return 0
    else return prevIndex + 1
  })
}

export const deleteAlert = () => {
  return Swal.fire({
    title: '게시물 삭제',
    text: '게시물을 삭제하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
    customClass: {
      popup: 'w-[275px] font-NanumSquareRound',
      icon: 'size-13',
      title: 'text-xl',
    },
  })
}

export const deleteOkAlert = () => {
  return Swal.fire({
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
  })
}

export const alertError = () => {
  return Swal.fire({
    title: '접근 불가',
    text: '잘못된 접근입니다.',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: '확인',
    customClass: {
      // popup: 'w-[275px] font-NanumSquareRound',
      // icon: 'size-13',
      // title: 'text-xl',
      // 커스텀 하기
    },
  })
}

export const confirmAlert = (title: string) => {
  return Swal.fire({
    width: '350px',
    color: '#000000',
    title: `<span style="font-size: 20px; font-weight : bolder;"> ${title}</span>`,
    confirmButtonText: '확인',
    confirmButtonColor: '#fef08a',
    didOpen: toast => {
      let confirmButton = toast.querySelector('.swal2-confirm') as HTMLElement // 타입 변환
      if (confirmButton) {
        confirmButton.style.color = '#000000' // 글자색 변경
        confirmButton.style.fontWeight = 'bolder'
      }
    },
  })
}
