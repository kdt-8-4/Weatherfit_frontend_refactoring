export enum TextStyle {
  GMARKET_TEXT = 'GMARKET_TEXT',
  NANUM_TEXT = 'NANUM_TEXT',
  CAFE_TEXT = 'CAFA_TEXT',
}

interface Props {
  textStyle: TextStyle
  style?: string
  children?: React.ReactNode
}

export default function TextStore({ textStyle, style, children }: Props) {
  const selectText = (): React.ReactNode => {
    switch (textStyle) {
      case TextStyle.GMARKET_TEXT:
        return <p className={`${style} font-gmarketsans`}>{children}</p>
      case TextStyle.NANUM_TEXT:
        return <p className={`${style} font-NanumSquareRound`}>{children}</p>
      case TextStyle.CAFE_TEXT:
        return <p className={`${style} font-Cafe24SsurroundAir`}>{children}</p>
    }
  }

  return <>{selectText()}</>
}
