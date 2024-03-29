import { useQuery } from 'react-query'

// 비동기 통신을 위한 함수
async function fetcher(url: string, options: RequestInit) {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`)
  }
  return response.json()
}

// 커스텀 훅
export function useFetchGet<T>(
  queryKey: string,
  url: string,
  options: RequestInit,
) {
  return useQuery(queryKey, () => fetcher(url, options))
}
