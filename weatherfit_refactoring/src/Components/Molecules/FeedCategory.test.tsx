import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedCategory from './FeedCategory'

//카테고리 선택창 Mocking

jest.mock('./post/FeedCategorySelect', () => {
  return () => <div>카테고리 선택창</div>
})

describe('FeedCategory 컴포넌트 유닛 테스트', () => {
  test('카테고리 버튼을 클릭했을 때, 카테고리 선택창이 나타나는지 확인한다.', async () => {
    // Given
    render(<FeedCategory />)

    // When
    const categoryButton = screen.getAllByRole('button')[0]
    userEvent.click(categoryButton)

    // Then
    await waitFor(() => {
      expect(screen.getByText('카테고리 선택창')).toBeInTheDocument()
    })
  })
})
