import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'
import CommentList from './components/CommentList'
import BlogPostList from './components/BlogPostsList'

const App = () => (
  <div>
    <CommentList user="Elizabeth" />
    <BlogPostList user="Lupo" />
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
