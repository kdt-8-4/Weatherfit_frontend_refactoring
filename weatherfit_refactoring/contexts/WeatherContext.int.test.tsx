import { useContext } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { WeatherProviderByContext, WeatherContext } from './WeatherContext'
import { server } from '../src/mocks/server'

beforeAll(() => {
  server.listen()
  // getCurrentPosition 모킹
  Object.defineProperty(global.navigator, 'geolocation', {
    value: {
      getCurrentPosition: jest.fn().mockImplementation(callback =>
        callback({
          coords: {
            latitude: 37.514575,
            longitude: 127.0495556,
          },
        }),
      ),
    },
  })
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

// 테스트용 컴포넌트 만들기
const TestComponent = () => {
  const { icon, tempNow, tempMax, tempMin, address, weather } =
    useContext(WeatherContext)

  return (
    <div>
      <div data-testid="icon">{icon}</div>
      <div data-testid="tempNow">{tempNow}</div>
      <div data-testid="tempMax">{tempMax}</div>
      <div data-testid="tempMin">{tempMin}</div>
      <div data-testid="address">{address}</div>
      <div data-testid="weather">{weather}</div>
    </div>
  )
}

test('WeatherContext를 통해 불러온 데이터를 하위 컴포넌트로 잘 보내주는 지 테스트', async () => {
  render(
    <WeatherProviderByContext>
      <TestComponent />
    </WeatherProviderByContext>,
  )

  await waitFor(() => {
    expect(screen.getByTestId('icon')).toHaveTextContent('01d')
    expect(screen.getByTestId('tempNow')).toHaveTextContent('23.5')
    expect(screen.getByTestId('tempMax')).toHaveTextContent('26.2')
    expect(screen.getByTestId('tempMin')).toHaveTextContent('20.7')
    expect(screen.getByTestId('address')).toHaveTextContent('서울 관악구')
    expect(screen.getByTestId('weather')).toHaveTextContent('Clear')
  })
})
