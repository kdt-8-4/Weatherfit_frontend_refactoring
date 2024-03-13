'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: (email: string, token: string) => void
}

// 초기값 undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 커스텀 훅 인증 없을 때 오류 알림
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const login = (email: string, token: string) => {
    localStorage.setItem('user_email', email)
    document.cookie = `accessToken=${token}; path=/`
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  )
}
