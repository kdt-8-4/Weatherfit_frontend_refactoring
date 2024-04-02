import InputStore from '@/Components/Atoms/Input/InputStore'
import RegisterLogo from '@/Components/Molecules/logo/RegisterLogo'
import RegisterForm from '@/Components/Organisms/register/RegisterForm'
import NavBar from '@/Components/Molecules/bar/NavBar'

export default function Register() {
  return (
    <>
      <div className="relative flex flex-col items-center mt-[30px]">
        <RegisterLogo />
        <RegisterForm />
      </div>
      <NavBar />
    </>
  )
}
