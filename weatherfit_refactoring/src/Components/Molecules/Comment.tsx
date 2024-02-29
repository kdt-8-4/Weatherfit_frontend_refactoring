import { useState } from 'react'
import CommentInput from './CommentInput'

interface Props {
  comment: CommentType
  comments: CommentType[]
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
  isReply?: boolean
}

export default function Comment({
  comment,
  comments,
  setComments,
  isReply = false,
}: Props) {
  const [content, setContent] = useState<string>('')
  const [showReply, setShowReply] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editContent, setEditContent] = useState<string>('')

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newComments = [...comments]
    const findComment = (comments: CommentType[]): CommentType[] =>
      comments.map(c =>
        c.id === comment.id
          ? {
              ...c,
              replyList: [
                ...c.replyList,
                {
                  id: Date.now(),
                  boardId: c.boardId,
                  nickname: comment.nickname,
                  content,
                  createdDate: '2024-02-20',
                  createdTime: '12:00',
                  replyList: [],
                  status: 1,
                },
              ],
            }
          : { ...c, replyList: findComment(c.replyList) },
      )
    setComments(findComment(newComments))

    setContent('')
  }

  const handleCommentEdit = (e: React.FormEvent) => {
    e.preventDefault()

    const newComments = [...comments]
    const findComment = (comments: CommentType[]): CommentType[] =>
      comments.map(c =>
        c.id === comment.id
          ? { ...c, content: editContent }
          : { ...c, replyList: findComment(c.replyList) },
      )
    setComments(findComment(newComments))
    setIsEditing(false)
  }

  const handleCommentDelete = () => {
    const newComments = [...comments]
    const findComment = (comments: CommentType[]): CommentType[] =>
      comments.map(c =>
        c.id === comment.id
          ? {
              ...c,
              content: c.replyList.length > 0 ? '삭제된 댓글입니다.' : '',
              status: c.replyList.length > 0 ? c.status : 0,
            }
          : { ...c, replyList: findComment(c.replyList) },
      )
    setComments(findComment(newComments))
  }

  return (
    <div>
      {comment.status !== 0 && (
        <>
          <div className="flex items-center">
            <p className="font-bold">{comment.nickname}</p>
            <p className="text-[#808080] text-[11px] ml-[8px]">
              {comment.createdDate}
            </p>
          </div>
          {!isEditing ? (
            <>
              <p>{comment.content}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          ) : (
            <form onSubmit={handleCommentEdit}>
              <input
                type="text"
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
              />
              <button type="submit">완료</button>
            </form>
          )}
          <button onClick={handleCommentDelete}>Delete</button>
        </>
      )}
      {showReply && comment.status !== 0 && (
        <div className="ml-[20px]">
          {comment.replyList.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              comments={comments}
              setComments={setComments}
              isReply={true}
            />
          ))}
          <CommentInput
            content={content}
            setContent={setContent}
            handleSubmit={handleReplySubmit}
            style="my-[5px]"
          />
        </div>
      )}
      {!isReply && comment.status !== 0 && (
        <button
          className="text-[12px]"
          onClick={() => setShowReply(!showReply)}>
          {showReply ? '- 답글 숨기기 -' : '- 답글 보기 -'}
        </button>
      )}
    </div>
  )
}
