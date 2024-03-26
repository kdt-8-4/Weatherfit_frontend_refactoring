"use client"
import InputStore, { InputStyle } from "../Atoms/Input/InputStore"
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import { useState } from "react"
import { confirmAlert } from "@/utils/function/utilFunction"


export default function RegisterForm(){
    const[email, setEmail] = useState<string>("")
    const[verifyHandler, setVerifyHandler] = useState<boolean>(false)
    const[verifyCode, setVerifyCode] = useState<string>("")
    const[emailDu, setEmailDu] = useState<string>("")
    const[name, setName] = useState<string>("")
    const[nickname, setNickname] = useState<string>("")
    const[nicknameDu, setNicknameDu] = useState<string>("")
    const[password, setPassword] = useState<string>("")
    const[checkpw, setCheckpw] = useState<string>("")
    const[permisson, setPermisson] = useState<boolean>(false)


    const setInfo = (e: React.ChangeEvent<HTMLInputElement>, value:string) => {
        if (value == "email") {
            setEmail(e.target.value)
        } 
        else if (value == "name") {
            setName(e.target.value)
        }
        else if (value == "nickName") {
            setNickname(e.target.value)
        }
        else if (value == "password") {
            setPassword(e.target.value)
        }
        else if (value == "checkpw") {
            setCheckpw(e.target.value)
        }
        else if (value == "verifyCode") {
            setVerifyCode(e.target.value)
        }
        
    }

    // 이메일 중복 검사
    const emailDuCheck = async() => {
        const obj = {
            email: email
        }
        
        try {
            const email_verify = await fetch("https://www.jerneithe.site/user/signup/email", {
                method: "POST",
                body: JSON.stringify(obj)
            })

            if(email_verify.ok){
                const toJson = await email_verify.json()
                if (toJson.data.result){
                    setEmailDu("※사용할 가능한 이메일입니다.")
                } else {
                    setEmailDu("※사용할 수 없는 이메일입니다. 다시 입력해 주세요")
                }
                
            } else {
                console.error("에러 발생", email_verify.status)
            }
        } catch (error) {
            console.error("에러 발생", error)
        }
    }


    // 닉네임 중복 검사
    const nickNameDuCheck = async() => {
        const obj = {
            nickname: nickname
        }
            
        try {
            const nickName_verify = await fetch("https://www.jerneithe.site/user/signup/nickname", {
                method: "POST",
                body: JSON.stringify(obj)
            })
    
            if(nickName_verify.ok){
                const toJson = await nickName_verify.json()
                if (toJson.data.result){
                    setNicknameDu("※사용할 가능한 닉네임입니다.")
                } else {
                    setNicknameDu("※사용할 수 없는 닉네임입니다. 다시 입력해 주세요")
                }
                
            } else {
                console.error("에러 발생", nickName_verify.status)
            }
        } catch (error) {
            console.error("에러 발생", error)
        }
    }

    // 이메일 인증 코드 전송
    const emailAuth = async() => {
        
        const obj = {
            email: email
        }
        try {
            const send_verifycode = await fetch("https://www.jerneithe.site/user/signup/email/send", {
                method: "POST",
                body: JSON.stringify(obj)
            })

            if(send_verifycode.ok){
                confirmAlert("인증코드를 전송했습니다.");
                setVerifyHandler(true)
            } else {
                confirmAlert("인증코드를 전송하지 못했습니다.");
                console.error("에러 발생", send_verifycode.status)
            }
        } catch (error) {
            confirmAlert("인증코드를 전송하지 못했습니다.");
            console.error("에러 발생", error)
        }
    }

    //받은 인증코드와 함께 코드 일치하는지 확인
    const emailAuth_code = async() => {
        const obj = {
            email: email,
            code: verifyCode,
        }
        try {
            const send_email_code = await fetch("https://www.jerneithe.site/user/signup/email/send", {
                method: "POST",
                body: JSON.stringify(obj)
            })

            if(send_email_code.ok){
                const toJson = await send_email_code.json()
                if (toJson.data.result) {
                    confirmAlert("인증 완료!");
                    setPermisson(true)
                }else {
                    confirmAlert("인증 코드가 일치하지 않습니다.");
                }    
            } else {
                console.error("에러 발생", send_email_code.status)
            }
        } catch (error) {
            console.error("에러 발생", error)
        }
    }

    // 회원가입
    const handleRegister = async() => {
        if (email.trim() === '') {
            confirmAlert('이메일을 입력해 주세요.')
            return
        } else if (password.trim() === '') {
            confirmAlert('비밀번호를 입력해 주세요.')
            return
        }

        if (!permisson) {
            confirmAlert('이메일 인증이 필요합니다.')
        } else {
            try {
                
            } catch (error) {
                
            }
        }

        
    }

    return(
        <form
            onSubmit={handleRegister}
            className=" mt-[30px] h-[600px] w-[350px]"
        >
            <div>
                <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={email}
                    inputType="text"
                    placeholderContents="이메일 주소"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>) => setInfo(e, "email")}
                    onBlur={emailDuCheck}
                    style="font-NanumSquareRound w-[255px] p-2"
                />
                <ButtonStore
                    buttonStyle={ButtonStyle.CONFIRM_BTN}
                    onClickFunction={emailAuth}
                    style="font-NanumSquareRound text-gray-700 w-[70px]  mx-2 p-2"
                >
                    인증
                </ButtonStore>
            </div>
            <p className=" font-NanumSquareRound">{emailDu}</p>
            {
                verifyHandler && 
                <div>
                    <InputStore
                        inputStyle={InputStyle.INPUT_WHITE}
                        value={verifyCode}
                        inputType="text"
                        placeholderContents="인증코드 입력"
                        onChageFunction={(e:React.ChangeEvent<HTMLInputElement>) => setInfo(e, "verifyCode")}
                        style="font-NanumSquareRound w-[255px] p-2"
                    />
                    <ButtonStore
                        buttonStyle={ButtonStyle.CONFIRM_BTN}
                        onClickFunction={emailAuth_code}
                        style="font-NanumSquareRound text-gray-700 w-[70px]  mx-2 p-2"
                    >
                        전송
                    </ButtonStore>
                </div>
            }
            <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={name}
                    inputType="text"
                    placeholderContents="이름"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>)=> setInfo(e, "name")}
                    style="font-NanumSquareRound w-[335px]  p-2 mt-[60px]"
            />
            <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={nickname}
                    inputType="text"
                    placeholderContents="닉네임"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>)=> setInfo(e, "nickname")}
                    onBlur={nickNameDuCheck}
                    style="font-NanumSquareRound w-[335px]  p-2 mt-[20px]"
            />
            <p className=" font-NanumSquareRound">{nicknameDu}</p>
            <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={password}
                    inputType="text"
                    placeholderContents="비밀번호 (8-20자 영문, 숫자, 특수기호 조합)"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>)=> setInfo(e, "password")}
                    style="font-NanumSquareRound w-[335px]  p-2 mt-[45px]"
            />
            <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={checkpw}
                    inputType="text"
                    placeholderContents="비밀번호 확인"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>)=> setInfo(e, "checkpw")}
                    style="font-NanumSquareRound w-[335px]  p-2 mt-[10px]"
            />
            <ButtonStore
                buttonStyle={ButtonStyle.CONFIRM_BTN}
                btnType="submit"
                style="font-neurimboGothic w-[335px] px-1 pb-1 text-[25px] mt-[40px]"
            >
                옷늘 캐스터 등록
            </ButtonStore>


        </form>
    )
}