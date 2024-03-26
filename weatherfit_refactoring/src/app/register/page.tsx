import InputStore from "@/Components/Atoms/Input/InputStore"
import RegisterLogo from "@/Components/Molecules/RegisterLogo"
import RegisterForm from "@/Components/Organisms/RegisterForm"
import NavBar from "@/Components/Molecules/NavBar"

export default function Register() {



    return (
        <div className="flex flex-col items-center mt-[30px]">
            <RegisterLogo />
            <RegisterForm />
            <NavBar/>
        </div>
    )
}