'use client'
import BoxStore, { BoxStyle } from '@/Components/Atoms/Box/BoxStore'
import TextStore, { TextStyle } from '@/Components/Atoms/Text/TextStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { confirmAlert } from '@/utils/function/utilFunction'
import RegisterLogo from '@/Components/Molecules/RegisterLogo'
import RegisterNickname from '@/Components/Molecules/RegisterNickname'
import NavBar from '@/Components/Molecules/NavBar'
import { useFetchGet } from '@/utils/useFetch/useFetchGet'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'

interface GOOGLEDATA {
  email: string
  id: string
  picture: string
  verified_email: boolean
}

export default function SocialRegister() {
  const router = useRouter()
  const [googleToken, setGoogletoken] = useState<string | null>()
  const [sendGoogle_data, setSendGoogle] = useState<GOOGLEDATA>()
  const [nickname, setNickname] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [resEmail, setResEmail] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [google_signup_check, setSignUpCheck] = useState<boolean>()

  const setInfo = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (value == 'name') {
      setName(e.target.value)
    } else if (value == 'nickname') {
      setNickname(e.target.value)
    }
  }

  useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1))
    const googleToken_url = parsedHash.get('access_token')

    setGoogletoken(googleToken_url)
  }, [])

  const googleDataQueryKey = 'googleData'
  const googleDataUrl = `https://www.googleapis.com/userinfo/v2/me?access_token=${googleToken}`
  const googleDataOptions = { method: 'GET' }

  const { data: callGoogleData, error } = useFetchGet(
    googleDataQueryKey,
    googleDataUrl,
    googleDataOptions,
  )

  //구글 토큰을 보내서 구글에서 요청하는 API 호출 함수
  const send = () => {
    if (callGoogleData) {
      setSendGoogle(callGoogleData)
    }
    if (error) {
      console.log('데이터 요청 실패', error)
    }
  }

  //Google 요청 API 보내서 인증 데이터 받아오기 실행
  useEffect(() => {
    if (googleToken) {
      send()
    }
  }, [googleToken])

  const googleLoginUrl = 'https://www.jerneithe.site/user/login/google'
  const googleLoginOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendGoogle_data),
  }

  const { mutate: getGoogleEmail } = useFetchMutation(googleLoginUrl)
  //인증 데이터를 보내서 Google 이메일 가지고 오는 함수
  const resgoogleEmail = () => {
    getGoogleEmail(googleLoginOptions, {
      onSuccess: (data: any) => {
        if (data.nickName == null) {
          setResEmail(data.email)
          setSignUpCheck(false)
        } else setSignUpCheck(true)
        setToken(data.token)
      },
      onError: error => {
        console.log('데이터 요청 실패', error)
      },
    })

    //인증 데이터 보내서 google 이메일 가지고 오기 실행
    useEffect(() => {
      if (sendGoogle_data) {
        resgoogleEmail()
      }
    }, [sendGoogle_data])

    useEffect(() => {
      if (token) {
        document.cookie = `accessToken=${token}; path=/`
      }
    }, [token])

    const googleRegisterUrl =
      'https://www.jerneithe.site/user/login/google/additional'
    const googleRegisterOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: resEmail,
        name,
        nickname,
      }),
    }
    const { mutate: googleRegister } = useFetchMutation(googleRegisterUrl)
    // 최종 회원가입 정보 백에 보내는 함수
    const GoogleRegisterDone = () => {
      googleRegister(googleRegisterOptions, {
        onSuccess() {
          confirmAlert('옷늘 캐스터 등록 완료!')
          router.push('/')
        },
        onError: error => {
          console.error('데이터 요청 실패', error)
        },
      })
    }

    return (
      <>
        {google_signup_check ? (
          <>
            <BoxStore
              boxStyle={BoxStyle.BOX_BLUE}
              style="h-[33px] font-neurimboGothic text-[30px] mb-[35px] px-[0.6rem] pb-[11px] shadow-[7px_7px_1px] flex items-center">
              옷늘날씨
            </BoxStore>
            <TextStore
              textStyle={TextStyle.GMARKET_TEXT}
              style="text-[20px] mb-[30px]">
              로그인 성공!!
            </TextStore>
            <Link href={'/login'}>
              <ButtonStore
                buttonStyle={ButtonStyle.DEFAULT_BTN}
                style="font-NanumSquareRound w-[170px] mb-[20px] px-[10px] hover:bg-yellow-200">
                로그인 페이지로 이동
              </ButtonStore>
            </Link>
            <Link href={'/'}>
              <ButtonStore
                buttonStyle={ButtonStyle.DEFAULT_BTN}
                style="font-NanumSquareRound w-[170px] px-[10px] hover:bg-yellow-200">
                메인 페이지로 이동
              </ButtonStore>
            </Link>
          </>
        ) : (
          <div className="flex flex-col items-center mt-[30px]">
            <RegisterLogo />
            <InputStore
              inputStyle={InputStyle.INPUT_WHITE}
              value={name}
              inputType="text"
              placeholderContents="이름"
              onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInfo(e, 'name')
              }
              style="font-NanumSquareRound w-[335px]  p-2 mt-[50px]"
            />
            <RegisterNickname nickname={nickname} setInfo={setInfo} />
            <ButtonStore
              buttonStyle={ButtonStyle.CONFIRM_BTN}
              btnType="submit"
              style="font-neurimboGothic w-[335px] px-1 pb-1 text-[25px] mt-[40px]"
              onClickFunction={GoogleRegisterDone}>
              옷늘 캐스터 등록
            </ButtonStore>
            <NavBar />
          </div>
        )}
      </>
    )
  }
}
