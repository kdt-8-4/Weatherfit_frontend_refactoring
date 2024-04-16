export enum TextStyle {
  GMARKET_TEXT = 'GMARKET_TEXT',
  NANUM_TEXT = 'NANUM_TEXT',
  CAFE_TEXT = 'CAFA_TEXT',
}

interface Props {
  textStyle: TextStyle
  style?: string
  children?: React.ReactNode
  tabIndex?: number
  ariaLabel?: string
}

export default function TextStore({
  textStyle,
  style,
  children,
  tabIndex,
  ariaLabel,
}: Props) {
  const selectText = (): React.ReactNode => {
    switch (textStyle) {
      case TextStyle.GMARKET_TEXT:
        return (
          <p
            className={`${style} font-gmarketsans`}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </p>
        )
      case TextStyle.NANUM_TEXT:
        return (
          <p
            className={`${style} font-NanumSquareRound`}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </p>
        )
      case TextStyle.CAFE_TEXT:
        return (
          <p
            className={`${style} font-Cafe24SsurroundAir`}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </p>
        )
    }
  }

  return <>{selectText()}</>
}
