import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import { useRouter } from 'next/navigation'
import EasyLogin from '@/Components/Organisms/login/EasyLogin'
import LoginForm from '@/Components/Molecules/user/LoginForm'
import NavBar from '@/Components/Molecules/bar/NavBar'
import TextStore, { TextStyle } from '@/Components/Atoms/Text/TextStore'
import MainLogo from '@/Components/Molecules/logo/MainLogo'

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center relative top-[25%]">
        <MainLogo />
        <main>
          <LoginForm />
          <EasyLogin />
        </main>
      </div>
      <NavBar />
    </>
  )
}
