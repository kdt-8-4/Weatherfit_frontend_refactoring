import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import CommentIcon from './CommentIcon'

export default function LikeAndComment() {
  return (
    <div className="flex">
      <IconStore iconStyle={IconStyle.UNLIKE} size={25} />
      <CommentIcon />
    </div>
  )
}
