import { useMutation } from 'react-query'

// 비동기 통신을 위한 함수
// options에 method와 body를 포함시켜 동적으로 처리할 수 있도록 수정
async function fetcher(url: string, options: RequestInit) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : null,
  })

  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`)
  }

  return response.json()
}

// 커스텀 훅
// options에는 method와 body를 포함할 수 있도록 수정
export function useFetchMutation<T>(url: string) {
  return useMutation<T, Error, RequestInit>(options => fetcher(url, options))
}
