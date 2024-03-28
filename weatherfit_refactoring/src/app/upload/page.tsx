'use client'

import ImageUpload from '@/Components/Organisms/ImageUpload'
import TextAreaMolecule from '@/Components/Molecules/TextAreaMolecule'
import SelectCategory from '@/Components/Organisms/SelectCategory'
import UploadHeader from '@/Components/Organisms/UploadHeader'
import UploadWeather from '@/Components/Molecules/UploadWeather'
import Loading from '@/Components/Organisms/Loading'
import NoLogin from '@/Components/Organisms/NoLogin'
import { LoadingStore } from '@/Store/Loading'
import { CheckStore } from '@/Store/Check'
import { AuthTokenStore } from '@/Store/AuthToken'
import { loginCheck } from '@/utils/function/utilFunction'
import { useEffect } from 'react'
import NavBar from '@/Components/Molecules/NavBar'

export default function Upload() {
  const { loading, setLoading } = LoadingStore()
  const { accesstoken, setAccessToken } = AuthTokenStore()
  const { check, setCheck } = CheckStore()

  useEffect(() => {
    setAccessToken()
    loginCheck(accesstoken, setCheck, setLoading)
  }, [accesstoken])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {check ? (
            <div className="h-screen">
              <UploadHeader />
              <div className="mx-5 h-full mt-[50px]">
                <div className="flex-col items-center justify-center mb-7">
                  <UploadWeather />
                  <ImageUpload mode="upload" />
                </div>
                <TextAreaMolecule mode="upload" />
                <hr />
                <SelectCategory mode="upload" />
              </div>
              {/* <NavBar /> */}
            </div>
          ) : (
            <NoLogin />
          )}
        </>
      )}
    </>
  )
}
