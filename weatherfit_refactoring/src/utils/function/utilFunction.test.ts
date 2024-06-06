import {
  confirmAlert,
  extractHashtags,
  handleNext,
  handlePrevious,
} from './utilFunction'
import Swal from 'sweetalert2'

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}))

describe('extractHashtags 테스트(업로드 페이지)', () => {
  it('해시태그 추줄 테스트', () => {
    const text = ' #테스트 맞나 #해시태그'
    const hashtags = extractHashtags(text)

    expect(hashtags).toEqual(['테스트', '해시태그'])
  })
})

describe('confirmAlert 테스트', () => {
  it('목 데이터를 만들어 설정한대로 alter창을 띄우는지 확인', () => {
    const title = 'Test Title'
    confirmAlert(title)

    expect(Swal.fire).toHaveBeenCalledWith({
      width: '350px',
      color: '#000000',
      title: `<span style="font-size: 20px; font-weight : bolder;"> ${title}</span>`,
      confirmButtonText: '확인',
      confirmButtonColor: '#fef08a',
      didOpen: expect.any(Function),
    })
  })
})
