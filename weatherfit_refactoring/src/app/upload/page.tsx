'use client'

import ImageUpload from '@/Components/Molecules/post/ImageUpload'
import TextAreaMolecule from '@/Components/Molecules/post/TextAreaMolecule'
import SelectCategory from '@/Components/Molecules/post/SelectCategory'
import UploadHeader from '@/Components/Molecules/header/UploadHeader'
import Weather from '@/Components/Molecules/post/Weather'
import Loading from '@/Components/Molecules/check/Loading'
import NoLogin from '@/Components/Molecules/check/NoLogin'
import { LoadingStore } from '@/Store/Loading'
import { CheckStore } from '@/Store/Check'
import { AuthTokenStore } from '@/Store/AuthToken'
import { loginCheck } from '@/utils/function/utilFunction'
import { useEffect } from 'react'

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
              <main className="mx-5 h-full mt-[50px] overflow-y-auto">
                <section className="flex-col items-center justify-center mb-7">
                  <Weather />
                  <ImageUpload mode="upload" />
                </section>
                <section>
                  <TextAreaMolecule mode="upload" />
                  <hr />
                  <SelectCategory mode="upload" />
                </section>
              </main>
            </div>
          ) : (
            <NoLogin />
          )}
        </>
      )}
    </>
  )
}
