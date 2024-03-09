import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import CommentIcon from './CommentIcon'

export default function LikeAndComment() {
  return (
    <div className="flex space-x-3">
      <IconStore iconStyle={IconStyle.UNLIKE} size={25} />
      <CommentIcon />
      {/* <IconStore iconStyle={IconStyle.COMMENTS} size={25} /> */}
    </div>
  )
}
