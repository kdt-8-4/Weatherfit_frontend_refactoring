import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'

export default function LikeAndComment() {
  return (
    <div className="flex space-x-3">
      <IconStore iconStyle={IconStyle.UNLIKE} size={25} />
      <IconStore iconStyle={IconStyle.COMMENTS} size={25} />
    </div>
  )
}
