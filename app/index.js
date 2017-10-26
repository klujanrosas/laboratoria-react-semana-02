import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'

const App = ({ title, content }) => (
  <div className="title">
    {title}: {content}
  </div>
)

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

render(
  <App
    title="EC React - Semana 2"
    content="React Components"
  />,
  document.getElementById('root')
)
