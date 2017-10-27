import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'

import ConBorde from './components/ConBorde'

const App = ({ title }) => (
  <div className="title">
    <ConBorde borderColor="black">
      {title}
    </ConBorde>
  </div>
)

App.propTypes = {
  title: PropTypes.string
}

render(
  <App title="Hola soy un texto" />,
  document.getElementById('root')
)
