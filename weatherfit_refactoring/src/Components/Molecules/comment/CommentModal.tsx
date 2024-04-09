'use client'
import { useEffect, useState } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'
import { confirmAlert } from '@/utils/function/utilFunction'
import { AuthTokenStore } from '@/Store/AuthToken'
import { AuthUserNickStore } from '@/Store/AuthUserNick'

interface Props {
  onClickFunction: () => void
  boardId: BOARDID
  comments: CommentType[]
}

export default function CommentModal({
  onClickFunction,
  boardId,
  comments,
}: Props) {
  const [commentList, setCommentList] = useState<CommentType[]>(
    comments.filter(comment => comment.status !== 0),
  )
  const [content, setContent] = useState<string>('')
  const { accesstoken } = AuthTokenStore()
  const { userNick } = AuthUserNickStore()

  // 댓글 더미 데이터
  // useEffect(() => {
  //   setAccessToken()
  //   const commentData = async () => {
  //     try {
  //       const res = await fetch('/dummy_data/comment.json')
  //       const resData = await res.json()
  //       console.log('res: ', resData)
  //       setComments(resData.comments_data)
  //     } catch (err) {
  //       console.log('err:', err)
  //     }
  //   }
  //   commentData()
  // }, [])

  useEffect(() => {
    console.log('댓글 목록 업데이트: ', commentList)
  }, [commentList])

  // 댓글 등록
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (content.trim() === '') {
      confirmAlert('내용을 입력해 주세요.')
      return
    }

    try {
      const res = await fetch('https://www.jerneithe.site/comment/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accesstoken,
        },
        body: JSON.stringify({
          boardId: boardId, // localBoardId 수정 필요
          content: content,
        }),
      })

      const data = await res.json()

      console.log('댓글 data: ', data)

      setCommentList([
        ...commentList,
        {
          id: data.id,
          boardId: data.boardId,
          nickname: data.nickname,
          content: content,
          createdDate: data.createdDate,
          createdTime: data.createdTime,
          replyList: [],
          status: data.status,
        },
      ])

      setContent('')
    } catch (err) {
      console.error('댓글 작성 에러: ', err)
    }
  }

  return (
    <div className="absolute top-0 left-0 m-0 w-[100%] h-[100%] bg-[#bababa4f] z-[100]">
      <div className="absolute bottom-0 bg-[#ffffff] w-[100%] h-[65%] rounded-t-lg z-[200] font-Cafe24SsurroundAir">
        <div className="flex justify-between my-[10px] mx-[5px] font-bold">
          <p className="w-[100%] text-center">댓글</p>
          <p className="cursor-pointer" onClick={onClickFunction}>
            X
          </p>
        </div>
        <hr />
        <div className="m-[10px] h-[79%] overflow-auto">
          {/* 댓글 목록 부분 */}
          {commentList
            .filter(comment => comment.status !== 0)
            .map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                comments={commentList}
                setComments={setCommentList}
              />
            ))}
        </div>
        <CommentInput
          content={content}
          setContent={setContent}
          handleSubmit={handleCommentSubmit}
          style="m-[10px] absolute bottom-[5px]"
          inputStyle="w-[325px] h-[30px]"
          btnText="게시"
          place={`${userNick}(으)로 작성...`}
        />
      </div>
    </div>
  )
}
