import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'

import ConBorde from './components/ConBorde'
import SplitPane from './components/SplitPane'

const Left = ({ title, content }) => (
  <ConBorde color="#528652">
    {title}: {content}
  </ConBorde>
)

const Right = ({ title, content }) => (
  <ConBorde color="#b4b4fb">
    {title}: {content}
  </ConBorde>
)

const App = () => (
  <div className="title">
    <SplitPane
      left={<Left title="Componente" content="Izquierda" />}
      right={<Right title="Componente" content="Derecha" />}
    />    
  </div>
)

Left.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Right.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

render(
  <App />,
  document.getElementById('root')
)
