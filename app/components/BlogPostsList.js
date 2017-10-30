import React from 'react'
import TextBlock from './TextBlock'
import DataSource from '../mock/DataSource'

const BlogPostList = ({ user }) => {
  const posts = DataSource.getBlogPosts(user)
  return (
    <div>
      {posts.map((post) => {
        return (
          <TextBlock text={post.text} key={post.id} />
        )
      })}
    </div>
  )
}

export default BlogPostList
