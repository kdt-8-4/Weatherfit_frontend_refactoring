import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailImage from './DetailImage'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ objectFit, ...props }: { objectFit: any }) => {
    return <img {...props} />
  },
}))

const image: IMAGE[] = [
  {
    boardId: 1,
    imageId: 1,
    imageUrl: 'https://test.com',
  },
]

const images: IMAGE[] = [
  {
    boardId: 2,
    imageId: 1,
    imageUrl: 'https://test0.com',
  },
  {
    boardId: 2,
    imageId: 2,
    imageUrl: 'https://test1.com',
  },
  {
    boardId: 2,
    imageId: 3,
    imageUrl: 'https://test2.com',
  },
]

describe('DetailImage 화면 테스트', () => {
  test('이미지가 한 개일때, 이미지 이동 버튼이 생성되지 않는다.', () => {
    // Given + When
    render(<DetailImage images={image} />)
    const imageButtonElement = screen.queryByTestId('image-button')

    // Then
    expect(imageButtonElement).toBeNull()
  })

  test('이미지가 두 개 이상일때, 이미지 이동 버튼이 생성된다.', () => {
    // Given + When
    render(<DetailImage images={images} />)
    const imageButtonElement = screen.queryByTestId('image-button')

    // Then
    expect(imageButtonElement).toBeInTheDocument()
  })

  describe('이미지가 3개인 경우 이미지 이동 버튼 테스트', () => {
    it('이전 버튼 클릭 시, 3번째 이미지를 보여준다.', async () => {
      // Given
      render(<DetailImage images={images} />)
      const prevButton = screen.getByRole('img', { name: 'prev' })

      // When
      userEvent.click(prevButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-2')
        expect(imageElement).toBeInTheDocument()
      })
    })

    it('이전 버튼을 2번 클릭 시, 2번째 이미지를 보여준다.', async () => {
      // Given
      render(<DetailImage images={images} />)
      const prevButton = screen.getByRole('img', { name: 'prev' })

      // When
      userEvent.click(prevButton)
      userEvent.click(prevButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-1')
        expect(imageElement).toBeInTheDocument()
      })
    })

    it('이전 버튼을 3번 클릭 시, 처음 이미지로 돌아온다', async () => {
      // Given
      render(<DetailImage images={images} />)
      const prevButton = screen.getByAltText('prev')

      // When
      userEvent.click(prevButton)
      userEvent.click(prevButton)
      userEvent.click(prevButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-0')
        expect(imageElement).toBeInTheDocument()
      })
    })

    it('다음 버튼 클릭 시, 2번째 이미지를 보여준다.', async () => {
      // Given
      render(<DetailImage images={images} />)
      const nextButton = screen.getByRole('img', { name: 'next' })

      // When
      userEvent.click(nextButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-1')
        expect(imageElement).toBeInTheDocument()
      })
    })

    it('다음 버튼 2번 클릭 시, 3번째 이미지를 보여준다.', async () => {
      // Given
      render(<DetailImage images={images} />)
      const nextButton = screen.getByRole('img', { name: 'next' })

      // When
      userEvent.click(nextButton)
      userEvent.click(nextButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-2')
        expect(imageElement).toBeInTheDocument()
      })
    })

    it('다음 버튼 3번 클릭 시, 처음 이미지로 돌아온다.', async () => {
      // Given
      render(<DetailImage images={images} />)
      const nextButton = screen.getByRole('img', { name: 'next' })

      // When
      userEvent.click(nextButton)
      userEvent.click(nextButton)
      userEvent.click(nextButton)

      // Then
      await waitFor(() => {
        const imageElement = screen.getByAltText('image-0')
        expect(imageElement).toBeInTheDocument()
      })
    })
  })
})
