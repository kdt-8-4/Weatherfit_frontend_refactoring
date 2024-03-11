'use client'
import { usePathname, useRouter } from 'next/navigation'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Props {
  iconStyle: keyof typeof IconStyle
  title: string
  url: string
}

export default function NavBarBox({ iconStyle, title, url }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    console.log('pathname: ', pathname)
    setIsActive(pathname === url)
  }, [pathname])
  console.log('isActive: ', isActive)

  const activeIconStyle = isActive
    ? IconStyle[`${iconStyle}_FILL` as keyof typeof IconStyle]
    : IconStyle[iconStyle]
  const activeTextStyle = isActive
    ? 'font-Cafe24SsurroundAir text-[11px] font-bold mt-[3px]'
    : 'font-Cafe24SsurroundAir text-[11px] mt-[3px]'

  return (
    <Link href={url} className="flex flex-col items-center cursor-pointer">
      <IconStore iconStyle={activeIconStyle} size={22} />
      <p className={activeTextStyle}>{title}</p>
    </Link>
  )
}
