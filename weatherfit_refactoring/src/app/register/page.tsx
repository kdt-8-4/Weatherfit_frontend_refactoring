import InputStore from "@/Components/Atoms/Input/InputStore"
import RegisterLogo from "@/Components/Molecules/RegisterLogo"
import RegisterEmail from "@/Components/Molecules/RegisterEmail"
import RegisterInput from "@/Components/Molecules/RegisterInput"
import RegisterDone from "@/Components/Molecules/RegisterDone"


export default function Register() {



    return (
        <div className="flex flex-col items-center mt-[75px]">
            <RegisterLogo />
            <RegisterEmail />
            <RegisterInput />
            <RegisterDone />
        </div>
    )
}