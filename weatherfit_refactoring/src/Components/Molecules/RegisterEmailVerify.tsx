import InputStore, { InputStyle } from "../Atoms/Input/InputStore"
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import { confirmAlert } from "@/utils/function/utilFunction";
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    email : string;
    verifyCode: string;
    verifyHandler: boolean;
    setVerifyHandler: Dispatch<SetStateAction<boolean>>;
    setPermisson: Dispatch<SetStateAction<boolean>>;
    setInfo: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function RegisterEmailVerify ({
    email,
    verifyCode,
    verifyHandler,
    setVerifyHandler,
    setPermisson,
    setInfo
}: Props) {
    const[textColor, setTextColor] = useState<string>("")
    const[emailDu, setEmailDu] = useState<string>("")

    // 이메일 중복 검사
    const emailDuCheck = async() => {
        
        console.log("이메일", email)
        
        try {
            const email_verify = await fetch("https://www.jerneithe.site/user/signup/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({
                    email: email
                })
            })

            
            
            if(email_verify.ok){
                const toJson = await email_verify.json()
                console.log(toJson)
                if (toJson.result){
                    setEmailDu("※사용할 가능한 이메일입니다.")
                    setTextColor("text-green-600")
                } else {
                    setEmailDu("※사용할 수 없는 이메일입니다. 다시 입력해 주세요")
                    setTextColor("text-red-600")
                }
                
            } else {
                console.error("에러 발생", email_verify.status)
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })

            if(send_verifycode.ok){
                confirmAlert("인증코드를 전송했습니다.");
                setVerifyHandler(true)
            } else {
                console.error("에러 발생", send_verifycode.status)
                confirmAlert("인증코드를 전송하지 못했습니다.");
            }
        } catch (error) {
            console.error("에러 발생", error)
            confirmAlert("인증코드를 전송하지 못했습니다.");
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })

            if(send_email_code.ok){
                const toJson = await send_email_code.json()
                if (toJson.result) {
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

    
    
    return(
        <div>
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
            <p className={`font-NanumSquareRound ${textColor} text-[14px]`}>{emailDu}</p>
            {
                verifyHandler && 
                <div className=" relative">
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
        </div>
    )
}