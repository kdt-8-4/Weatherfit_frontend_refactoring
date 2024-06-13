import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedSearch from '@/Components/Molecules/post/FeedSearch'
import FeedContent from '@/Components/Molecules/post/FeedContent'

// msw 서버 설정을 위한 import
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import feed_data from '../public/dummy_data/feedData.json'

const handlers = [
  http.get('https://www.jerneithe.site/board/list', () => {
    return HttpResponse.json([feed_data[0], feed_data[1]])
  }),

  http.get('https://www.jerneithe.site/board/search', info => {
    const url = new URL(info.request.url)
    const inputHashtag = url.searchParams.get('hashtags')
    if (inputHashtag === '#카페 #겨울 #행복') {
      return HttpResponse.json([feed_data[0]])
    }
  }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('피드 페이지 통합 테스트', () => {
  describe('해시태그 검색에 대한 테스트', () => {
    //// 테스트 해시태그로 검색 시 받는 코디 데이터 ////
    // {
    //     boardId: 1,
    //     nickName: '홍길동',
    //     likeCount: 2,
    //     temperature: 1.2,
    //     images: {
    //       boardId: 1,
    //       imageId: 1,
    //       imageUrl:
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0OerVCpI1NxInMd93w4JtvWoGmeRf4l8ZlLM7-A--g&s',
    //     },
    //     category: ['숏 패딩', '컨버스'],
    //     hashTag: ['카페', '행복', '겨울'],
    //     weatherIcon: 'https://openweathermap.org/img/wn/13d.png',
    //     likelist: [
    //       {
    //         likeId: 1,
    //         nickName: '김첨지',
    //       },
    //       {
    //         likeId: 2,
    //         nickName: 'lifeis_Happy',
    //       },
    //     ],
    //     modifiedDate: '2024-02-15T08:00:00.000Z',
    //     createDate: '2024-02-13T08:00:00.000Z',
    //   },
    //// 테스트 해시태그로 검색 시 받는 코디 데이터 ////

    test('해시태그 입력 후 검색 버튼 클릭 시 해당하는 코디가 보여진다.', async () => {
      // Given
      // 가져온 코디에 대한 blurURI
      const BLURURI: string =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAIAAAAGpYjXAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nAH6AAX/AODb0PHr3/v269DKwmlfWHR1coiIiLu7uQDy7eL68+nW08goJygYFxgLCwxoaGimpqUA8O3i//rtoZ6XExITKCcoBgYHTExMkJCPAO3o3/z262NgXRYWFignJwICAi8tLYaGhgD17+bu6d2Uk4wvLS0VFBUMDAw9PDx5eXkA8e/m8evg8evfMC8wBgYIGBgXb29viIiIAOvl2/fy6O/q4DMyMgAAABYWFnJycouLiwD79uv99uv//vOIh4ZMTEtWVVVycnKJiYgAzcKv2M259+zVr62mpqaidHRya21tg4SFAHJpXHJmWoN1ZV9WTX10bFZRS01HQHhwZvYaezP3SOmNAAAAAElFTkSuQmCC'
      render(
        <div>
          <FeedSearch />
          <FeedContent DataforFeed={feed_data[0]} blurDataUrl={BLURURI} />
        </div>,
      )
      const input: HTMLInputElement = screen.getByPlaceholderText(
        "'# + 해시태그' 형식으로 입력하세요",
      )
      const searchIcon = screen.getByAltText('search')

      // When
      await userEvent.type(input, '#카페 #겨울 #행복')
      userEvent.click(searchIcon)

      // Then
      await waitFor(() => {
        const nickName = screen.getByText(/홍길동/)
        const temperature = screen.getByText('1.2℃')
        const category = screen.getByLabelText('코디 정보 숏 패딩,컨버스')
        const likeCount = screen.getByText('2')

        expect(nickName).toBeInTheDocument()
        expect(temperature).toBeInTheDocument()
        expect(category).toBeInTheDocument()
        expect(likeCount).toBeInTheDocument()
      })
    })
  })
})
