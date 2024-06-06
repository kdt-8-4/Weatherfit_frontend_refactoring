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

describe('DetailImage 컴포넌트 테스트', () => {
  it('이미지가 한 개일때 렌더링 테스트', () => {
    render(<DetailImage images={image} />)
    const imageButtonElement = screen.queryByTestId('image-button')
    expect(imageButtonElement).toBeNull()
  })

  it('이미지가 두 개 이상일때 렌더링 테스트', () => {
    render(<DetailImage images={images} />)
    const imageButtonElement = screen.queryByTestId('image-button')
    expect(imageButtonElement).toBeInTheDocument()
  })

  it('이전 버튼 클릭 시 이미지 렌더링 테스트 1', async () => {
    render(<DetailImage images={images} />)
    const prevButton = screen.getByRole('img', { name: 'prev' })
    userEvent.click(prevButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-2')
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('이전 버튼 클릭 시 이미지 렌더링 테스트 2', async () => {
    render(<DetailImage images={images} />)
    const prevButton = screen.getByRole('img', { name: 'prev' })
    userEvent.click(prevButton)
    userEvent.click(prevButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-1')
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('이전 버튼 클릭 시 이미지 렌더링 테스트 3', async () => {
    render(<DetailImage images={images} />)
    const prevButton = screen.getByAltText('prev')
    userEvent.click(prevButton)
    userEvent.click(prevButton)
    userEvent.click(prevButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-0')
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('다음 버튼 클릭 시 이미지 렌더링 테스트 1', async () => {
    render(<DetailImage images={images} />)
    const nextButton = screen.getByRole('img', { name: 'next' })
    userEvent.click(nextButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-1')
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('다음 버튼 클릭 시 이미지 렌더링 테스트 2', async () => {
    render(<DetailImage images={images} />)
    const nextButton = screen.getByRole('img', { name: 'next' })
    userEvent.click(nextButton)
    userEvent.click(nextButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-2')
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('다음 버튼 클릭 시 이미지 렌더링 테스트 3', async () => {
    render(<DetailImage images={images} />)
    const nextButton = screen.getByRole('img', { name: 'next' })
    userEvent.click(nextButton)
    userEvent.click(nextButton)
    userEvent.click(nextButton)
    await waitFor(() => {
      const imageElement = screen.getByAltText('image-0')
      expect(imageElement).toBeInTheDocument()
    })
  })
})
