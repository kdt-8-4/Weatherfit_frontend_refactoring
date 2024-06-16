import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedSearch from '@/Components/Molecules/post/FeedSearch'
import { FeedData } from '@/Store/FeedData'

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
    if (inputHashtag === '카페,겨울,행복') {
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
    //     category: ['데님 팬츠', '컨버스'],
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
      render(
        <div>
          <FeedSearch />
          {/* <FeedContent DataforFeed={feed_data[0]} blurDataUrl={BLURURI} /> */}
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
        expect(FeedData.getState().feedData[0]).toStrictEqual(feed_data[0])
      })
    })
  })
})
