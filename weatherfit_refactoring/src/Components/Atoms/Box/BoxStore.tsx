export const enum BoxStyle {
  BOX_WHITE = 'BOX_WHITE',
  BOX_YELLOW = 'BOX_YELLOW',
  BOX_BLUE = 'BOX_BLUE',
  BOX_IMAGE = 'BOX_IMAGE',
}

interface Props {
  title?: string
  boxStyle: BoxStyle
  style?: string
  onClickFunction?: () => void
  children?: React.ReactNode
  tabIndex?: number
  ariaLabel?: string
}

export default function BoxStore({
  boxStyle,
  children,
  onClickFunction,
  style,
  tabIndex,
  ariaLabel,
}: Props) {
  const selectButton = (): React.ReactNode => {
    switch (boxStyle) {
      case BoxStyle.BOX_WHITE:
        return (
          <button
            className={`${style} bg-white border border-black rounded-2xl `}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </button>
        )
      case BoxStyle.BOX_YELLOW:
        return (
          <div
            className={`${style} bg-yellow-200 border-black rounded-2xl `}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </div>
        )
      case BoxStyle.BOX_BLUE:
        return (
          <div
            className={`${style} bg-blue-300 rounded-2xl`}
            onClick={onClickFunction}
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </div>
        )
      case BoxStyle.BOX_IMAGE:
        return (
          <div
            className="border rounded-2xl w-32 h-48 bg-stone-200 flex hover:bg-stone-300 relative  flex-shrink-0"
            tabIndex={tabIndex}
            aria-label={ariaLabel}>
            {children}
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
