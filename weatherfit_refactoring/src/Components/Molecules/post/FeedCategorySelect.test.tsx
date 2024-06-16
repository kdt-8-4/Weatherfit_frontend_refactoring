// 카테고리 검색 컴포넌트 주요 기능 테스트 목록
// 초기화 버튼 클릭 시 초기화 되는지 확인 0
// 카테고리 제목 버튼 클릭 시 하위 카테고리 표시되는지 확인 0
// 검색 버튼 클릭 시 원하는 코디가 불러와지는지 확인 0
// 온도 설정에 맞춰서 올바른 코디를 가져오는 지 확인 0

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedCategorySelect from './FeedCategorySelect'
import { FeedData } from '@/Store/FeedData'
import { CategorySelectData } from '@/Store/CategorySelectData'

// msw 서버 설정을 위한 import
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import feed_data from '../../../../public/dummy_data/feedData.json'

const handlers = [
  http.get('https://www.jerneithe.site/board/list', () => {
    return HttpResponse.json([feed_data[0], feed_data[1]])
  }),

  http.get('https://www.jerneithe.site/board/search', info => {
    const url = new URL(info.request.url)
    const inputCategory = url.searchParams.get('categories')
    if (inputCategory === '데님 팬츠') {
      return HttpResponse.json([feed_data[0]])
    }
    if (inputCategory === '셔츠') {
      return HttpResponse.json([feed_data[1]])
    }
    if (inputCategory === '') {
      return HttpResponse.json([feed_data[0], feed_data[1]])
    }
  }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

const mockCategoryData = [
  {
    id: 1,
    title: '상의',
    value: 'top',
    selectLists: [
      { list_id: 1, selectList: '티셔츠' },
      { list_id: 2, selectList: '셔츠' },
    ],
  },
  {
    id: 2,
    title: '하의',
    value: 'bottom',
    selectLists: [
      { list_id: 1, selectList: '데님 팬츠' },
      { list_id: 2, selectList: '코튼 팬츠' },
    ],
  },
]

jest.mock('@/Store/CategoryData', () => ({
  CategoryData: () => ({ categoryData: mockCategoryData }),
}))

describe('카테고리 검색 기능에 대한 유닛 테스트', () => {
  beforeEach(() => {
    FeedData.setState({ feedData: [] })
    CategorySelectData.setState({ selectData: [] })
  })

  test('초기화 버튼 클릭 시 선택한 카테고리가 모두 취소된다.', async () => {
    // Given
    render(<FeedCategorySelect />)
    // When
    const Button = screen.getByText('상의')
    userEvent.click(Button)
    await waitFor(() => {
      userEvent.click(screen.getAllByText('셔츠')[0])
      const resetButton = screen.getByText('초기화')
      userEvent.click(resetButton)
      // Then
      expect(CategorySelectData.getState().selectData).toStrictEqual([])
    })
  })

  describe('카테고리 제목 버튼 클릭', () => {
    describe('하위 카테고리가 표시된다.', () => {
      test('상의 버튼 클릭 시 상의의 하위 카테고리가 표시된다.', async () => {
        // Given
        render(<FeedCategorySelect />)
        // When
        const Button = screen.getByText('상의')
        userEvent.click(Button)
        // Then
        await waitFor(() => {
          expect(screen.getByText('티셔츠')).toBeInTheDocument()
          expect(screen.getByText('셔츠')).toBeInTheDocument()
        })
      })

      test('하의 버튼 클릭 시 하의의 하위 카테고리가 표시된다.', async () => {
        // Given
        render(<FeedCategorySelect />)
        // When
        const Button = screen.getByText('하의')
        userEvent.click(Button)
        //Then
        await waitFor(() => {
          expect(screen.getByText('데님 팬츠')).toBeInTheDocument()
          expect(screen.getByText('코튼 팬츠')).toBeInTheDocument()
        })
      })
    })
  })

  describe('선택한 카테고리에 맞게 코디를 불러온다.', () => {
    //// 데님 팬츠 선택 후 검색 시 받는 코디 데이터 ////
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
    //// 데님 팬츠 선택 후 검색 시 받는 코디 데이터 ////

    test('데님 팬츠 선택 후 검색 시 맞는 코디를 불러온다', async () => {
      // Given
      render(<FeedCategorySelect />)
      // When
      const Button = screen.getByText('하의')
      userEvent.click(Button)
      await waitFor(() => {
        userEvent.click(screen.getAllByText('데님 팬츠')[0])
        const searchButton = screen.getByText('선택 카테고리 검색하기')
        userEvent.click(searchButton)
        // Then
        expect(FeedData.getState().feedData[0]).toStrictEqual(feed_data[0])
      })
    })

    //// 셔츠 선택 후 검색 시 받는 코디 데이터 ////
    // {
    //   "boardId": 2,
    //   "category": ["후드 집업", "가죽자켓", "컨버스", "운동화", "셔츠"],
    //   "createDate": "2024-02-14T08:00:00.000Z",
    //   "hashTag": ["카페", "행복", "겨울", "과", "가을", "사이"],
    //   "images": {
    //     "boardId": 2,
    //     "imageId": 2,
    //     "imageUrl": "https://i.pinimg.com/564x/18/c0/a6/18c0a61d88e3d75e77039f2de8813f55.jpg"
    //   },
    //   "likeCount": 2,
    //   "likelist": [
    //     {
    //       "likeId": 1,
    //       "nickName": "김첨지"
    //     },
    //     {
    //       "likeId": 2,
    //       "nickName": "lifeis_Happy"
    //     }
    //   ],
    //   "modifiedDate": "2024-02-16T08:00:00.000Z",
    //   "nickName": "smile_",
    //   "temperature": 5.1,
    //   "weatherIcon": "https://openweathermap.org/img/wn/04n.png"
    // }
    //// 셔츠 선택 후 검색 시 받는 코디 데이터 ////

    test('셔츠 선택 후 검색 시 맞는 코디를 불러온다', async () => {
      // Given
      render(<FeedCategorySelect />)
      // When
      const Button = screen.getByText('상의')
      userEvent.click(Button)
      await waitFor(() => {
        userEvent.click(screen.getAllByText('셔츠')[0])
        const searchButton = screen.getByText('선택 카테고리 검색하기')
        userEvent.click(searchButton)
        // Then
        expect(FeedData.getState().feedData[0]).toStrictEqual(feed_data[1])
      })
    })
  })

  describe('온도 설정 시 온도에 맞는 코디만 불러와진다', () => {
    test('4도에서 6도 사이의 코디를 불러온다.(feed_data[1])', async () => {
      // Given
      render(<FeedCategorySelect />)
      // When
      const maxTempInput =
        screen.getByPlaceholderText('최고온도를 입력해주세요.')
      const minTempInput =
        screen.getByPlaceholderText('최저온도를 입력해주세요.')
      await userEvent.type(minTempInput, '4')
      await userEvent.type(maxTempInput, '6')
      await waitFor(() => {
        const searchButton = screen.getByText('선택 카테고리 검색하기')
        userEvent.click(searchButton)
        // Then
        expect(FeedData.getState().feedData[0]).toStrictEqual(feed_data[1])
      })
    })

    test('0도에서 3도 사이의 코디를 불러온다.(feed_data[0])', async () => {
      // Given
      render(<FeedCategorySelect />)
      // When
      const maxTempInput =
        screen.getByPlaceholderText('최고온도를 입력해주세요.')
      const minTempInput =
        screen.getByPlaceholderText('최저온도를 입력해주세요.')
      await userEvent.type(minTempInput, '0')
      await userEvent.type(maxTempInput, '3')
      await waitFor(() => {
        const searchButton = screen.getByText('선택 카테고리 검색하기')
        userEvent.click(searchButton)
        // Then
        expect(FeedData.getState().feedData[0]).toStrictEqual(feed_data[0])
      })
    })
  })
})
