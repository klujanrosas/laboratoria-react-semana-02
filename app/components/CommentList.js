import React from 'react'
import Comment from './Comment'
import DataSource from '../mock/DataSource'

const CommentList = ({ user }) => {
  const comments = DataSource.getComments(user)

  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment comment={comment.text} key={comment.id} />
        )
      })}
    </div>
  )
}

export default CommentList
