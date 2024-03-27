"use client"
import InputStore, { InputStyle } from "../Atoms/Input/InputStore"
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { confirmAlert } from "@/utils/function/utilFunction"
import RegisterEmailVerify from "../Molecules/RegisterEmailVerify"
import RegisterNickname from "../Molecules/RegisterNickname"
import Registerpw from "../Molecules/Registerpw"

export default function RegisterForm(){
    const router = useRouter()
    
    const[email, setEmail] = useState<string>("")
    const[verifyHandler, setVerifyHandler] = useState<boolean>(false)
    const[verifyCode, setVerifyCode] = useState<string>("")
    const[name, setName] = useState<string>("")
    const[nickname, setNickname] = useState<string>("")
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
        else if (value == "nickname") {
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
 
    // 회원가입
    const handleRegister = async() => {
        const registerInfo = {
            email: email,
            name: name,
            nickname: nickname,
            password: password,
        }    
        if (permisson) {
            try {
                const send_verifycode = await fetch("https://www.jerneithe.site/user/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(registerInfo)
                })
    
                if(send_verifycode.ok){
                    confirmAlert("회원가입 완료!");
                    router.push('/');
                } else {
                    console.error("에러 발생", send_verifycode.status)
                    confirmAlert("모든 정보를 입력해야 \n등록이 가능합니다.");
                }
            } catch (error) {
                console.error("에러 발생", error)
                confirmAlert("모든 정보를 입력해야 \n등록이 가능합니다.");
            }
        } else {
            confirmAlert("이메일 인증을 완료해주세요.");
        }

        
        
    }

    return(
        <div
            className=" mt-[30px] h-[600px] w-[350px]"
        >
            <RegisterEmailVerify 
                email={email}
                verifyCode={verifyCode}
                verifyHandler={verifyHandler}
                setVerifyHandler={setVerifyHandler}
                setPermisson={setPermisson}
                setInfo={setInfo}
            />
            <InputStore
                    inputStyle={InputStyle.INPUT_WHITE}
                    value={name}
                    inputType="text"
                    placeholderContents="이름"
                    onChageFunction={(e:React.ChangeEvent<HTMLInputElement>)=> setInfo(e, "name")}
                    style="font-NanumSquareRound w-[335px]  p-2 mt-[50px]"
            />
            
            <RegisterNickname
                nickname={nickname}
                setInfo={setInfo}
            />

            <Registerpw 
                password={password}
                checkpw={checkpw}
                setInfo={setInfo}
            />
           
            <ButtonStore
                buttonStyle={ButtonStyle.CONFIRM_BTN}
                btnType="submit"
                style="font-neurimboGothic w-[335px] px-1 pb-1 text-[25px] mt-[40px]"
                onClickFunction={handleRegister}
            >
                옷늘 캐스터 등록
            </ButtonStore>


        </div>
    )
}