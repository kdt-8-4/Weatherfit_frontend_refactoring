import Image from 'next/image'

export enum IconStyle {
  MY_PROFILE = 'MY_PROFILE',
  MY_PROFILE_FILL = 'MY_PROFILE_FILL',
  UPLOAD_FILL = 'UPLOAD_FILL',
  UPLOAD = 'UPLOAD',
  HOME_FILL = 'HOME_FILL',
  HOME = 'HOME',
  COMMENTS = 'COMMENTS',
  UNLIKE = 'UNLIKE',
  LIKE = 'LIKE',
  TOGGLE = 'TOGGLE',
  TOGGLE2 = 'TOGGLE2',
  PREV = 'PREV',
  PREV2 = 'PREV2',
  NEXT = 'NEXT',
  SETTING = 'SETTING',
  ETC = 'ETC',
  LOWEST = 'LOWEST',
  HIGHEST = 'HIGHEST',
  SEARCH = 'SEARCH',
}

interface Props {
  iconStyle: IconStyle
  size?: number
  style?: string
}

export default function IconStore({ iconStyle, size, style }: Props) {
  const selectIcon = (): React.ReactNode => {
    switch (iconStyle) {
      case IconStyle.MY_PROFILE_FILL:
        return (
          <Image
            src={'/icon_svg/my_profile_fill.svg'}
            alt="my_profile_fill"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.MY_PROFILE:
        return (
          <Image
            src={'/icon_svg/my_profile.svg'}
            alt="my_profile"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.UPLOAD_FILL:
        return (
          <Image
            src={'/icon_svg/upload_fill.svg'}
            alt="upload_fill"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.UPLOAD:
        return (
          <Image
            src={'/icon_svg/upload.svg'}
            alt="upload"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.HOME_FILL:
        return (
          <Image
            src={'/icon_svg/home_fill.svg'}
            alt="home_fill"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.HOME:
        return (
          <Image
            src={'/icon_svg/home.svg'}
            alt="home"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.COMMENTS:
        return (
          <Image
            src={'/icon_svg/comments.svg'}
            alt="comments"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.UNLIKE:
        return (
          <Image
            src={'/icon_svg/unlike.svg'}
            alt="unlike"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.LIKE:
        return (
          <Image
            src={'/icon_svg/like.svg'}
            alt="like"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.TOGGLE:
        return (
          <Image
            src={'/icon_svg/toggle.svg'}
            alt="toggle"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.TOGGLE2:
        return (
          <Image
            src={'/icon_svg/toggle2.svg'}
            alt="toggle2"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.PREV:
        return (
          <Image
            src={'/icon_svg/prev.svg'}
            alt="prev"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.PREV2:
        return (
          <Image
            src={'/icon_svg/prev2.svg'}
            alt="prev2"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.NEXT:
        return (
          <Image
            src={'/icon_svg/next.svg'}
            alt="next"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.SETTING:
        return (
          <Image
            src={'/icon_svg/setting.svg'}
            alt="setting"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.ETC:
        return (
          <Image
            src={'/icon_svg/etc.svg'}
            alt="etc"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.HIGHEST:
        return (
          <Image
            src={'/icon_svg/highest.svg'}
            alt="highest"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.LOWEST:
        return (
          <Image
            src={'/icon_svg/lowest.svg'}
            alt="lowest"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      case IconStyle.SEARCH:
        return (
          <Image
            src={'/icon_svg/search.svg'}
            alt="search"
            width={size}
            height={size}
            className={`${style}`}
          />
        )
      default:
        return null
    }
  }

  return <>{selectIcon()}</>
}
