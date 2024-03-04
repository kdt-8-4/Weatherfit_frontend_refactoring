import { useState } from 'react'
import CommentInput from './CommentInput'
import { confirmAlert } from '@/utils/function/utilFunction'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

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

  // 답글 등록
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

  // 댓글(또는 답글) 수정
  const handleCommentEdit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editContent.trim() === '') {
      confirmAlert('내용을 입력해 주세요.')
      return
    }

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

  // 댓글(또는 답글) 삭제
  const handleCommentDelete = () => {
    const newComments = [...comments]
    const findComment = (comments: CommentType[]): CommentType[] =>
      comments.map(c =>
        c.id === comment.id
          ? { ...c, status: 0 }
          : { ...c, replyList: findComment(c.replyList) },
      )
    setComments(findComment(newComments))
  }

  return (
    <div>
      {comment.status !== 0 && (
        <>
          <div className="flex items-center relative">
            <p className="font-bold">{comment.nickname}</p>
            <p className="text-[#808080] text-[11px] ml-[8px]">
              {comment.createdDate}
            </p>
            {!isEditing ? (
              <div className="text-[12px] absolute right-[5px]">
                <button className="mx-[5px]" onClick={() => setIsEditing(true)}>
                  수정
                </button>
                |
                <button className="mx-[5px]" onClick={handleCommentDelete}>
                  삭제
                </button>
              </div>
            ) : null}
          </div>
          {!isEditing ? (
            <p>{comment.content}</p>
          ) : (
            <form onSubmit={handleCommentEdit}>
              <InputStore
                inputStyle={InputStyle.INPUT_WHITE}
                inputType="text"
                placeholderContents="수정하기..."
                value={editContent}
                onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditContent(e.target.value)
                }
                style="w-[285px] h-[30px]"
              />
              <ButtonStore
                buttonStyle={ButtonStyle.CONFIRM_BTN}
                style="w-[40px] h-[30px]"
                btnType="submit">
                완료
              </ButtonStore>
            </form>
          )}
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
            inputStyle="w-[285px] h-[30px]"
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
