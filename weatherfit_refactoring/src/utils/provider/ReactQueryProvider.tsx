'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export default function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
