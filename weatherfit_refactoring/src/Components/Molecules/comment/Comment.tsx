import { useDebugValue, useEffect, useState } from 'react'
import CommentInput from './CommentInput'
import { confirmAlert } from '@/utils/function/utilFunction'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserNickStore } from '@/Store/AuthUserNick'

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
  const { accesstoken } = AuthTokenStore()
  const { userNick } = AuthUserNickStore()

  // 답글 등록
  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (content.trim() === '') {
      confirmAlert('내용을 입력해 주세요.')
      return
    }

    try {
      const res = await fetch('https://www.jerneithe.site/comment/reply', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + accesstoken, // accessToken 수정 필요
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentId: comment.id,
          content: content,
        }),
      })

      const data = await res.json()

      console.log('답글 data: ', data)

      const newComments = [...comments]
      const findComment = (comments: CommentType[]): CommentType[] =>
        comments.map(c =>
          c.id === comment.id
            ? {
                ...c,
                replyList: [
                  ...c.replyList,
                  {
                    id: data.id,
                    boardId: c.boardId,
                    nickname: comment.nickname,
                    content,
                    createdDate: data.createdDate,
                    createdTime: data.createdTime,
                    replyList: [],
                    status: 1,
                  },
                ],
              }
            : { ...c, replyList: findComment(c.replyList) },
        )
      setComments(findComment(newComments))

      setContent('')
    } catch (err) {
      console.log('답글 작성 오류: ', err)
    }
  }

  // ----------------------------------------------------------------------
  // 댓글 수정
  const editComment = async (id: number, newContent: string) => {
    try {
      const res = await fetch('https://www.jerneithe.site/comment/modify', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accesstoken,
        },
        body: JSON.stringify({
          id: id,
          content: newContent,
        }),
      })
      const data = await res.json()
      console.log('댓글 수정 결과: ', data)
    } catch (err) {
      console.log('댓글 수정 오류:', err)
    }
  }

  // 답글 수정
  const editReply = async (id: number, newContent: string) => {
    try {
      const res = await fetch(
        'https://www.jerneithe.site/comment/modify/reply',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accesstoken,
          },
          body: JSON.stringify({
            id: id,
            content: newContent,
          }),
        },
      )
      const data = await res.json()
      console.log('답글 수정 결과: ', data)
    } catch (err) {
      console.log('답글 수정 오류:', err)
    }
  }

  // 수정
  const handleCommentEdit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editContent.trim() === '') {
      confirmAlert('내용을 입력해 주세요.')
      return
    }

    if (!isReply) {
      await editComment(comment.id, editContent)
    } else {
      await editReply(comment.id, editContent)
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

  // ----------------------------------------------------------------------
  // 댓글 삭제
  const deleteComment = async (id: number) => {
    try {
      const res = await fetch(
        `https://www.jerneithe.site/comment/remove?commentId=${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + accesstoken,
          },
        },
      )
      const data = await res.json()
      console.log('댓글 삭제 결과: ', data)
    } catch (err) {
      console.log('댓글 삭제 오류: ', err)
    }
  }

  // 답글 삭제
  const deleteReply = async (id: number) => {
    try {
      const res = await fetch(
        `https://www.jerneithe.site/comment/remove/reply?replyId=${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + accesstoken,
          },
        },
      )
      const data = await res.json()
      console.log('답글 삭제 결과: ', data)
    } catch (err) {
      console.log('답글 삭제 오류: ', err)
    }
  }

  // 삭제
  const handleCommentDelete = async () => {
    if (!isReply) {
      await deleteComment(comment.id)
    } else {
      await deleteReply(comment.id)
    }

    const newComments = [...comments]
    const findComment = (comments: CommentType[]): CommentType[] =>
      comments.map(c =>
        c.id === comment.id
          ? { ...c, status: 0 }
          : { ...c, replyList: c.replyList ? findComment(c.replyList) : [] },
      )
    setComments(findComment(newComments))
  }

  return (
    <div className="my-[10px]">
      {comment.status !== 0 && (
        <>
          <div className="flex items-center relative">
            <p className="font-bold">{comment.nickname}</p>
            <p className="text-[#808080] text-[11px] ml-[8px]">
              {comment.createdDate}
            </p>
            {/* 수정 부분 */}
            {comment.nickname === userNick && !isEditing ? (
              <div className="text-[12px] absolute right-[5px]">
                <ButtonStore
                  buttonStyle={ButtonStyle.TEXT_BTN}
                  style="mx-[5px]"
                  onClickFunction={() => setIsEditing(true)}>
                  수정
                </ButtonStore>
                |
                <ButtonStore
                  buttonStyle={ButtonStyle.TEXT_BTN}
                  style="mx-[5px]"
                  onClickFunction={handleCommentDelete}>
                  삭제
                </ButtonStore>
              </div>
            ) : null}
          </div>
          {!isEditing ? (
            <p className="my-[1px]">{comment.content}</p>
          ) : (
            <CommentInput
              handleSubmit={handleCommentEdit}
              content={editContent}
              setContent={setEditContent}
              inputStyle="w-[285px] h-[30px]"
              btnText="완료"
              place="수정하기..."
            />
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
            btnText="게시"
            place={`${userNick}(으)로 작성...`}
          />
        </div>
      )}
      {!isReply && comment.status !== 0 && (
        <ButtonStore
          buttonStyle={ButtonStyle.TEXT_BTN}
          style="text-[12px] text-[#808080] mt-[5px]"
          onClickFunction={() => setShowReply(!showReply)}>
          {showReply ? '- 답글 숨기기 -' : '- 답글 보기 -'}
        </ButtonStore>
      )}
    </div>
  )
}
