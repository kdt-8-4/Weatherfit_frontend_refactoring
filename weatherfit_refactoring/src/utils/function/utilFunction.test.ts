import {
  confirmAlert,
  extractHashtags,
  alertError,
  deleteAlert,
  deleteOkAlert,
  strongPassword,
  loginCheck,
} from './utilFunction'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}))

//// extractHashtags
describe('extractHashtags 테스트(업로드 페이지)', () => {
  it('해시태그 추줄 테스트', () => {
    const text = ' #테스트 맞나 #해시태그'
    const hashtags = extractHashtags(text)

    expect(hashtags).toEqual(['테스트', '해시태그'])
  })
})

//// alert 테스트
describe('alert 테스트', () => {
  it('confirmAlert 테스트', () => {
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

  it('alertError 테스트', () => {
    alertError()

    expect(Swal.fire).toHaveBeenCalledWith({
      title: '접근 불가',
      text: '잘못된 접근입니다.',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: '확인',
      customClass: {},
    })
  })

  it('deleteAlert 테스트', () => {
    deleteAlert()

    expect(Swal.fire).toHaveBeenCalledWith({
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
  })

  it('deleteOkAlert 테스트', () => {
    deleteOkAlert()

    expect(Swal.fire).toHaveBeenCalledWith({
      title: '삭제 완료',
      text: '게시물이 성공적으로 삭제되었습니다.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: '확인',
      customClass: {},
    })
  })
})

//// strongPassword
describe('strongPassword 테스트', () => {
  it('true 케이스 1', () => {
    const password = strongPassword('Test1234!')
    expect(password).toEqual(true)
  })

  it('true 케이스 2 (대문자 없음)', () => {
    const password = strongPassword('test1234!')
    expect(password).toEqual(true)
  })

  it('true 케이스 3 (소문자 없음)', () => {
    const password = strongPassword('TEST1234!')
    expect(password).toEqual(true)
  })

  it('false 케이스 1 (특수문자 없음)', () => {
    const password = strongPassword('Test1234')
    expect(password).toEqual(false)
  })

  it('false 케이스 2 (8자리 미만)', () => {
    const password = strongPassword('Te123!')
    expect(password).toEqual(false)
  })

  it('false 케이스 3 (숫자 없음)', () => {
    const password = strongPassword('Testtest@')
    expect(password).toEqual(false)
  })

  it('false 케이스 4 (영어 없음)', () => {
    const password = strongPassword('1234@#$!')
    expect(password).toEqual(false)
  })

  it('false 케이스 5 (숫자만 있을 때)', () => {
    const password = strongPassword('12345678')
    expect(password).toEqual(false)
  })
  it('false 케이스 6 (공백 포함)', () => {
    const password = strongPassword('Test 1234!')
    expect(password).toEqual(false)
  })
})

//// loginCheck 함수 테스트
describe('loginCheck 테스트', () => {
  let setCheck: jest.Mock
  let setLoading: jest.Mock

  beforeEach(() => {
    setCheck = jest.fn()
    setLoading = jest.fn()
  })

  it('value가 undefined일 때 setCheck와 setLoading이 false로 설정되어야 함', () => {
    loginCheck(undefined, setCheck, setLoading)
    expect(setCheck).toHaveBeenCalledWith(false)
    expect(setLoading).toHaveBeenCalledWith(false)
  })

  it('value가 string일 때 setCheck가 true로 설정되고 setLoading이 false로 설정되어야 함', () => {
    loginCheck('test', setCheck, setLoading)
    expect(setCheck).toHaveBeenCalledWith(true)
    expect(setLoading).toHaveBeenCalledWith(false)
  })
})
