import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedSearch, { hashToUrlForSearch } from './FeedSearch'

jest.mock('@/Store/FeedData', () => ({
  FeedData: () => ({ setFeedData: jest.fn() }),
}))

describe('FeedSearch 컴포넌트 테스트', () => {
  test('해시태그 입력 필드에 입력이 제대로 반영된다.', async () => {
    // Given
    render(<FeedSearch />)
    const input: HTMLInputElement = screen.getByPlaceholderText(
      "'# + 해시태그' 형식으로 입력하세요",
    )

    // When
    await userEvent.type(input, '#테스트')

    // Then
    waitFor(() => expect(input.value).toBe('#테스트'))
  })

  test('취소 버튼 클릭 시, 입력 필드가 초기화된다.', async () => {
    // Given
    render(<FeedSearch />)
    const input: HTMLInputElement = screen.getByPlaceholderText(
      "'# + 해시태그' 형식으로 입력하세요",
    )
    const cancelBtn = screen.getByRole('button', { name: '취소' })

    // When
    await userEvent.type(input, '#테스트')
    userEvent.click(cancelBtn)

    // Then
    await waitFor(() => expect(input.value).toBe(''))
  })

  test('해시태그 검색 아이콘 클릭 시, 검색 함수가 호출된다.', async () => {
    // Given
    render(<FeedSearch />)
    const searchIcon = screen.getByAltText('search')

    const mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([]),
      } as Response),
    )

    // When
    userEvent.click(searchIcon)

    // Then
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled()
    })

    // Clean up
    mockFetch.mockRestore()
  })

  describe('hashToUrlForSearch 함수 테스트', () => {
    test('해시태그 문자열을 분해하여 검색 url을 반환한다', () => {
      // Given
      const hashValue = '#테스트1 #테스트2'
      const url = 'https://www.jerneithe.site/board/search?hashtags='

      // When
      const searchUrl = hashToUrlForSearch(hashValue, url)

      // Then
      expect(searchUrl).toBe(
        'https://www.jerneithe.site/board/search?hashtags=테스트1,테스트2',
      )
    })

    test('해시태그가 없는 경우, url을 반환하지 않는다.', () => {
      // Given
      const hashValue = ''
      const url = 'https://www.jerneithe.site/board/search?hashtags='

      // When
      const searchUrl = hashToUrlForSearch(hashValue, url)

      // Then
      expect(searchUrl).toBe(
        'https://www.jerneithe.site/board/search?hashtags=',
      )
    })
  })
})
